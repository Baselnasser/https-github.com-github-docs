import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { UnderlineNav } from '@primer/react'
import { sendEvent, EventType } from 'components/lib/events'
import { useRouter } from 'next/router'

type Option = {
  value: string
  label: string
}
type Props = {
  // Use this if not specified on the query string
  defaultValue?: string
  // Use this if not specified on the query string or no cookie
  fallbackValue: string
  cookieKey: string
  queryStringKey: string
  onValue: (value: string) => void
  preferenceName: string
  options: Option[]
  ariaLabel: string
}
export const InArticlePicker = ({
  defaultValue,
  fallbackValue,
  cookieKey,
  queryStringKey,
  onValue,
  preferenceName,
  options,
  ariaLabel,
}: Props) => {
  const router = useRouter()
  const { query, locale } = router
  const [currentValue, setCurrentValue] = useState('')

  // Run on mount for client-side only features
  useEffect(() => {
    const raw = query[queryStringKey]
    let value = ''
    if (raw) {
      if (Array.isArray(raw)) value = raw[0]
      else value = raw
    }
    // Only pick it up from the possible query string if its value
    // is a valid option.
    const possibleValues = options.map((option) => option.value)
    if (!value || !possibleValues.includes(value)) {
      const cookieValue = Cookies.get(cookieKey)
      if (defaultValue) {
        value = defaultValue
      } else if (cookieValue && possibleValues.includes(cookieValue)) {
        value = cookieValue
      } else {
        value = fallbackValue
      }
    }
    setCurrentValue(value)
  }, [query, fallbackValue, defaultValue, options])

  const [asPathRoot, asPathQuery = ''] = router.asPath.split('#')[0].split('?')

  useEffect(() => {
    // This will make the hook run this callback on mount and on change.
    // That's important because even though the user hasn't interacted
    // and made an overriding choice, we still want to run this callback
    // because the page might need to be corrected based on *a* choice
    // independent of whether it's a change.
    if (currentValue) {
      onValue(currentValue)
    }
  }, [
    currentValue,
    // This is important because we can't otherwise rely on the firing
    // of this effect on initial mount. It also needs to fire when the
    // URL (i.e. route) changes.
    // Don't use `router.asPath` because that contains the query string
    // which we handle in the other useEffect above.
    asPathRoot,
  ])

  function onClickChoice(value: string) {
    const params = new URLSearchParams(asPathQuery)
    params.set(queryStringKey, value)
    const newPath = `/${locale}${asPathRoot}?${params}`
    router.push(newPath, undefined, { shallow: true, locale })

    sendEvent({
      type: EventType.preference,
      preference_name: preferenceName,
      preference_value: value,
    })

    Cookies.set(cookieKey, value, {
      sameSite: 'strict',
      secure: document.location.protocol !== 'http:',
      expires: 365,
    })
  }

  const sharedContainerProps = {
    'data-testid': `${queryStringKey}-picker`,
    'aria-label': ariaLabel,
    [`data-default-${queryStringKey}`]: defaultValue || '',
    className: 'mb-4',
  }

  const params = new URLSearchParams(asPathQuery)

  return (
    <UnderlineNav {...sharedContainerProps}>
      {options.map((option) => {
        params.set(queryStringKey, option.value)
        const linkProps = {
          [`data-${queryStringKey}`]: option.value,
        }
        return (
          <UnderlineNav.Link
            href={`?${params}`}
            key={option.value}
            selected={option.value === currentValue}
            onClick={(event) => {
              event.preventDefault()
              onClickChoice(option.value)
            }}
            {...linkProps}
          >
            {option.label}
          </UnderlineNav.Link>
        )
      })}
    </UnderlineNav>
  )
}
