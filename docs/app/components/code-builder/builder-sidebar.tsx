import { css, cx } from 'styled-system/css'
import { scrollable } from 'styled-system/patterns'
import type { PropsWithChildren } from 'react'

interface BuilderSidebarProps {}

export default function BuilderSidebar(
  props: PropsWithChildren<BuilderSidebarProps>,
) {
  return (
    <div
      className={cx(
        scrollable({
          direction: 'vertical',
          hideScrollbar: true,
        }),
        css({
          bgColor: 'page.surface.initial',
          h: {
            '@/sm': 'fit-content',
            '@/md': 'calc(100% - 0.5rem)',
          },
          position: 'relative',
          pxi: '4',
          pb: '4',
          marginInlineEnd: {
            '@/sm': 'initial',
            '@/md': '1',
          },
          rounded: '2xl',
          shadow: 'lg',
          w: {
            '@/md': '1/3',
          },
        }),
      )}
    >
      <div>{props.children}</div>
    </div>
  )
}
