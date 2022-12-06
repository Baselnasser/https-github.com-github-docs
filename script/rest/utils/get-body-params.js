#!/usr/bin/env node
import renderContent from '../../../lib/render-content/index.js'

// If there is a oneOf at the top level, then we have to present just one
// in the docs. We don't currently have a convention for showing more than one
// set of input parameters in the docs. Having a top-level oneOf is also very
// uncommon.
// Currently there aren't very many operations that require this treatment.
// As an example, the 'Add status check contexts' and 'Set status check contexts'
// operations have a top-level oneOf.

async function getTopLevelOneOfProperty(schema) {
  if (!schema.oneOf) {
    throw new Error('Schema does not have a requestBody oneOf property defined')
  }
  if (!(Array.isArray(schema.oneOf) && schema.oneOf.length > 0)) {
    throw new Error('Schema requestBody oneOf property is not an array')
  }
  // When a oneOf exists but the `type` differs, the case has historically
  // been that the alternate option is an array, where the first option
  // is the array as a property of the object. We need to ensure that the
  // first option listed is the most comprehensive and preferred option.
  const firstOneOfObject = schema.oneOf[0]
  const allOneOfAreObjects = schema.oneOf.every((elem) => elem.type === 'object')
  let required = firstOneOfObject.required || []
  let properties = firstOneOfObject.properties || {}

  // When all of the oneOf objects have the `type: object` we
  // need to display all of the parameters.
  // This merges all of the properties and required values.
  if (allOneOfAreObjects) {
    for (const each of schema.oneOf.slice(1)) {
      Object.assign(firstOneOfObject.properties, each.properties)
      required = firstOneOfObject.required.concat(each.required)
    }
    properties = firstOneOfObject.properties
  }
  return { properties, required }
}

// Gets the body parameters for a given schema recursively.
export async function getBodyParams(schema, topLevel = false) {
  const bodyParametersParsed = []
  const schemaObject = schema.oneOf && topLevel ? await getTopLevelOneOfProperty(schema) : schema
  const properties = schemaObject.properties || {}
  const required = schemaObject.required || []

  for (const [paramKey, param] of Object.entries(properties)) {
    const paramDecorated = {}
    // OpenAPI 3.0 only had a single value for `type`. OpenAPI 3.1
    // will either be a single value or an array of values.
    // This makes type an array regardless of how many values the array
    // includes. This allows us to support 3.1 while remaining backwards
    // compatible with 3.0.
    const paramType = Array.isArray(param.type) ? param.type : [param.type]
    const additionalPropertiesType = param.additionalProperties
      ? Array.isArray(param.additionalProperties.type)
        ? param.additionalProperties.type
        : [param.additionalProperties.type]
      : []
    const childParamsGroups = []

    // If the parameter is an array or object there may be child params
    // If the parameter has oneOf or additionalProperties, they need to be
    // recursively read too.

    // There are a couple operations with additionalProperties, which allows
    // the api to define input parameters with the type dictionary. These are the only
    // two operations (at the time of adding this code) that use additionalProperties
    // Create a snapshot of dependencies for a repository
    // Update a gist
    if (param.additionalProperties && additionalPropertiesType.includes('object')) {
      const keyParam = {
        type: 'object',
        name: 'key',
        description: await renderContent(
          `A user-defined key to represent an item in \`${paramKey}\`.`
        ),
        isRequired: param.required,
        enum: param.enum,
        default: param.default,
        childParamsGroups: [],
      }
      keyParam.childParamsGroups.push(...(await getBodyParams(param.additionalProperties, false)))
      childParamsGroups.push(keyParam)
    } else if (paramType && paramType.includes('array')) {
      const arrayType = param.items.type
      if (arrayType) {
        paramType.splice(paramType.indexOf('array'), 1, `array of ${arrayType}s`)
      }
      if (arrayType === 'object') {
        childParamsGroups.push(...(await getBodyParams(param.items, false)))
      }
    } else if (paramType && paramType.includes('object')) {
      childParamsGroups.push(...(await getBodyParams(param, false)))
    } else if (param && param.oneOf) {
      // get concatenated description and type
      const descriptions = []
      for (const childParam of param.oneOf) {
        paramType.push(childParam.type)
        // If there is no parent description, create a description from
        // each type
        if (!param.description) {
          if (childParam.type === 'array') {
            if (childParam.items.description) {
              descriptions.push({
                type: childParam.type,
                description: childParam.items.description,
              })
            }
          } else {
            if (childParam.description) {
              descriptions.push({ type: childParam.type, description: childParam.description })
            }
          }
        }
      }
      // Occasionally, there is no parent description and the description
      // is in the first child parameter.
      const oneOfDescriptions = descriptions.length ? descriptions[0].description : ''
      if (!param.description) param.description = oneOfDescriptions

      // This is a workaround for an operation that incorrectly defines allOf for a
      // body parameter. As a workaround, we will use the first object in the list of
      // the allOf array. Otherwise, fallback to the first item in the array.
      // This isn't ideal, and in the case of an actual allOf occurrence, we should
      // handle it differently by merging all of the properties. There is currently
      // only one occurrence for the operation id repos/update-information-about-pages-site
      // See Ecosystem API issue number #3332 for future plans to fix this in the OpenAPI
    } else if (param && param.anyOf && Object.keys(param).length === 1) {
      const firstObject = Object.values(param.anyOf).find((item) => item.type === 'object')
      if (firstObject) {
        paramType.push('object')
        param.description = firstObject.description
        param.isRequired = firstObject.required
        childParamsGroups.push(...(await getBodyParams(firstObject, false)))
      } else {
        paramType.push(param.anyOf[0].type)
        param.description = param.anyOf[0].description
        param.isRequired = param.anyOf[0].required
      }
    }

    // Supports backwards compatibility for OpenAPI 3.0
    // In 3.1 a nullable type is part of the param.type array and
    // the property param.nullable does not exist.
    if (param.nullable) paramType.push('null')
    paramDecorated.type = paramType.filter(Boolean).join(' or ')
    paramDecorated.name = paramKey
    if (topLevel) {
      paramDecorated.in = 'body'
    }
    paramDecorated.description = await renderContent(param.description)
    if (required.includes(paramKey)) {
      paramDecorated.isRequired = true
    }
    if (childParamsGroups.length > 0) {
      paramDecorated.childParamsGroups = childParamsGroups
    }
    if (param.enum) {
      paramDecorated.enum = param.enum
    }

    // we also want to catch default values of `false` for booleans
    if (param.default !== undefined) {
      paramDecorated.default = param.default
    }

    bodyParametersParsed.push(paramDecorated)
  }

  return bodyParametersParsed
}
