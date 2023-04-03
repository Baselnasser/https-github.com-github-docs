import { useRouter } from 'next/router'

import { Link } from 'components/Link'
import { GraphqlItem } from './GraphqlItem'
import { Table } from './Table'
import { useTranslation } from 'components/hooks/useTranslation'
import type { ObjectT, ImplementsT } from './types'

type Props = {
  item: ObjectT
}

export function Object({ item }: Props) {
  const { locale } = useRouter()
  const { t } = useTranslation('products')
  const heading1 = t('graphql.reference.implements').replace('{{ GraphQLItemTitle }}', item.name)
  const heading2 = t('graphql.reference.fields').replace('{{ GraphQLItemTitle }}', item.name)

  return (
    <GraphqlItem item={item}>
      {item.implements && (
        <>
          <h3 dangerouslySetInnerHTML={{ __html: heading1 }} />
          <ul>
            {item.implements.map((implement: ImplementsT) => (
              <li key={`${implement.id}-${implement.href}-${implement.name}`}>
                <code>
                  <Link href={implement.href} locale={locale}>
                    {implement.name}
                  </Link>
                </code>
              </li>
            ))}
          </ul>
        </>
      )}

      {item.fields && (
        <>
          <h3 dangerouslySetInnerHTML={{ __html: heading2 }} />
          <Table fields={item.fields} />
        </>
      )}
    </GraphqlItem>
  )
}
