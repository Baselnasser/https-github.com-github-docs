import { useTranslation } from 'components/hooks/useTranslation'
import { StatusCode } from './types'

type Props = {
  statusCodes: Array<StatusCode>
  slug: string
  heading: string
}

export function RestStatusCodes({ statusCodes, slug, heading }: Props) {
  const { t } = useTranslation('products')

  return (
    <>
      <h3 className="mt-4 mb-3 pt-3 h4" id={`${slug}--status-codes`}>
        <a href={`#${slug}--status-codes`}>{heading}</a>
      </h3>

      <table>
        <thead>
          <tr className="text-left">
            <th>{t('rest.reference.status_code')}</th>
            <th>{t('rest.reference.description')}</th>
          </tr>
        </thead>
        <tbody>
          {statusCodes.map((statusCode, index) => (
            <tr key={`${statusCode.description}-${index}}`}>
              <td>
                <code>{statusCode.httpStatusCode}</code>
              </td>
              <td>
                {statusCode.description ? (
                  <div dangerouslySetInnerHTML={{ __html: statusCode.description }} />
                ) : (
                  statusCode.httpStatusMessage
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
