import React from 'react'
import cx from 'classnames'
import { Box } from '@primer/react'
import { SupportPortalVaIframe, SupportPortalVaIframeProps } from './SupportPortalVaIframe'

import styles from './ArticleInlineLayout.module.scss'

type Props = {
  intro?: React.ReactNode
  topper?: React.ReactNode
  toc?: React.ReactNode
  children?: React.ReactNode
  className?: string
  supportPortalVaIframeProps?: SupportPortalVaIframeProps
}
export const ArticleInlineLayout = ({
  intro,
  topper,
  toc,
  children,
  className,
  supportPortalVaIframeProps,
}: Props) => {
  return (
    <Box className={cx(styles.containerBox, className)}>
      {topper && <Box gridArea="topper">{topper}</Box>}
      {toc && (
        <Box
          gridArea="sidebar"
          alignSelf="flex-start"
          className={cx(styles.sidebarBox, 'border-bottom border-lg-0 pb-4 mb-5 pb-xl-0 mb-xl-0')}
        >
          {toc}
        </Box>
      )}

      {intro && (
        <Box id="article-intro" gridArea="intro">
          {intro}
        </Box>
      )}

      <Box
        gridArea="content"
        data-search="article-body"
        className={cx(styles.articleContainer, className)}
      >
        {supportPortalVaIframeProps &&
          supportPortalVaIframeProps.supportPortalUrl &&
          supportPortalVaIframeProps.vaFlowUrlParameter && (
            <SupportPortalVaIframe supportPortalVaIframeProps={supportPortalVaIframeProps} />
          )}
        {children}
      </Box>
    </Box>
  )
}
