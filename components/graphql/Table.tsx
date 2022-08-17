import { useRouter } from 'next/router'

import { Link } from 'components/Link'
import { Notice } from './Notice'
import { useTranslation } from 'components/hooks/useTranslation'
import { FieldT } from './types'

type Props = {
  fields: FieldT[]
}

export function Table({ fields }: Props) {
  const { locale } = useRouter()

  const { t } = useTranslation('products')
  const tableName = t('graphql.reference.name')
  const tableDescription = t('graphql.reference.description')

  return (
    <table className="fields width-full">
      <thead>
        <tr>
          <th>{tableName}</th>
          <th>{tableDescription}</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((field) => (
          <tr key={field.name}>
            <td>
              <p>
                <code>{field.name}</code> (
                <code>
                  <Link href={field.href} locale={locale}>
                    {field.type}
                  </Link>
                </code>
                )
              </p>
            </td>
            <td>
              {field.description ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: field.description,
                  }}
                />
              ) : (
                'N/A'
              )}
              {field.defaultValue !== undefined && (
                <p>
                  The default value is <code>{field.defaultValue.toString()}</code>.
                </p>
              )}
              {field.preview && <Notice item={field} variant="preview" />}
              {field.isDeprecated && <Notice item={field} variant="deprecation" />}

              {field.arguments && (
                <div className="border rounded-1 mt-3 mb-3 p-3 color-bg-subtle f5">
                  <h4 className="pt-0 mt-0">{t('graphql.reference.arguments')}</h4>
                  {field.arguments.map((argument, index) => (
                    <ul
                      key={`${index}-${argument.type.name}-${argument.type.href}`}
                      className="list-style-none pl-0"
                    >
                      <li className="border-top mt-2">
                        <p className="mt-2">
                          <code>{argument.name}</code> (
                          <code>
                            <Link href={argument.type.href} locale={locale}>
                              {argument.type.name}
                            </Link>
                          </code>
                          )
                        </p>
                        {
                          <span
                            dangerouslySetInnerHTML={{
                              __html: argument.description,
                            }}
                          />
                        }
                        {argument.defaultValue !== undefined && (
                          <p>
                            The default value is <code>{argument.defaultValue.toString()}</code>.
                          </p>
                        )}
                      </li>
                    </ul>
                  ))}
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
