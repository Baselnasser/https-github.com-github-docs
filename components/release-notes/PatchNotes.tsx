import { Fragment } from 'react'
import cx from 'classnames'
import { slug } from 'github-slugger'
import { ReleaseNotePatch } from './types'
import { Link } from 'components/Link'

import styles from './PatchNotes.module.scss'

const SectionToLabelMap: Record<string, string> = {
  features: 'Features',
  bugs: 'Bug fixes',
  known_issues: 'Known issues',
  security_fixes: 'Security fixes',
  changes: 'Changes',
  deprecations: 'Deprecations',
  backups: 'Backups',
}

type Props = {
  patch: ReleaseNotePatch
  withReleaseNoteLabel?: boolean
}
export function PatchNotes({ patch, withReleaseNoteLabel }: Props) {
  return (
    <>
      {Object.entries(patch.sections).map(([key, sectionItems], i, arr) => {
        const isLast = i === arr.length - 1
        return (
          <div
            key={key}
            className={cx(
              'py-6 d-block d-xl-flex',
              !withReleaseNoteLabel && 'mx-6',
              !isLast && 'border-bottom'
            )}
          >
            <ul className={cx(withReleaseNoteLabel)}>
              <h3>{SectionToLabelMap[key] || 'INVALID SECTION'}</h3>
              {sectionItems.map((item) => {
                if (typeof item === 'string') {
                  return <li key={item} className="f4" dangerouslySetInnerHTML={{ __html: item }} />
                }

                const headingSlug = item.heading ? slug(item.heading) : ''
                return (
                  <Fragment key={headingSlug}>
                    <h4 id={headingSlug} className={cx(styles.sectionHeading, 'text-bold f4')}>
                      <Link href={`#${headingSlug}`}>{item.heading}</Link>
                    </h4>
                    {item.notes.map((note) => {
                      return (
                        <li key={note} className="f4" dangerouslySetInnerHTML={{ __html: note }} />
                      )
                    })}
                  </Fragment>
                )
              })}
            </ul>
          </div>
        )
      })}
    </>
  )
}
