import { GraphqlItem } from './GraphqlItem'
import { Table } from './Table'
import { useTranslation } from 'components/hooks/useTranslation'
import type { InputObjectT } from './types'

type Props = {
  item: InputObjectT
}

export function InputObject({ item }: Props) {
  const { t } = useTranslation('products')
  const heading = t('graphql.reference.input_fields')
  return (
    <GraphqlItem item={item} heading={heading}>
      <Table fields={item.inputFields} />
    </GraphqlItem>
  )
}
