import { useRouter } from 'next/router'
import { Dropdown } from '@primer/components'

import { Link } from 'components/Link'
import { useMainContext } from './context/MainContext'

export const LanguagePicker = () => {
  const router = useRouter()
  const { languages } = useMainContext()
  const locale = router.locale || 'en'
  const langs = Object.values(languages)
  const selectedLang = languages[locale]

  return (
    <div className="ml-4 d-flex flex-justify-center flex-items-center">
      <Dropdown
        css={`
          ul {
            width: unset;
          }
        `}
      >
        <summary>
          {selectedLang.nativeName || selectedLang.name}
          <Dropdown.Caret />
        </summary>
        <Dropdown.Menu direction="sw">
          {langs.map((lang) => {
            return (
              <Dropdown.Item key={lang.code}>
                <Link href={router.asPath} locale={lang.hreflang}>
                  {lang.nativeName ? (
                    <>
                      {lang.nativeName} ({lang.name})
                    </>
                  ) : (
                    lang.name
                  )}
                </Link>
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
