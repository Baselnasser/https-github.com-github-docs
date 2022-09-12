import React from 'react'

import { useTranslation } from 'components/hooks/useTranslation'
import { GraphqlItem } from './GraphqlItem'
import type { EnumT } from './types'

type Props = {
  item: EnumT
}

export function Enum({ item }: Props) {
  const { t } = useTranslation('products')
  const heading = t('graphql.reference.values')

  return (
    <GraphqlItem item={item} heading={heading}>
      {item.values.map((value) => (
        <React.Fragment key={`${value.name}-${value.description}`}>
          <p>
            <strong>{value.name}</strong>
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: value.description,
            }}
          />
        </React.Fragment>
      ))}
    </GraphqlItem>
  )
}
