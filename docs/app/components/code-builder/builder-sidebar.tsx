'use client'

import { Button } from '@cerberus-design/react'
import { css, cx } from '@cerberus/styled-system/css'
import { scrollable } from '@cerberus/styled-system/patterns'
import type { PropsWithChildren } from 'react'

interface BuilderSidebarProps {
  expanded: boolean
  onClose: () => void
}

export default function BuilderSidebar(
  props: PropsWithChildren<BuilderSidebarProps>,
) {
  return (
    <div
      aria-expanded={props.expanded}
      className={cx(
        scrollable({
          direction: 'vertical',
          hideScrollbar: true,
        }),
        css({
          bottom: {
            '@/sm': '8',
            '@/md': 'initial',
          },
          bgColor: {
            '@/sm': 'page.surface.100',
            '@/md': 'page.surface.initial',
          },
          display: {
            '@/sm': 'none',
            '@/md': 'initial',
          },
          left: {
            '@/sm': '0',
            '@/md': 'initial',
          },
          position: {
            '@/sm': 'fixed',
            '@/md': 'relative',
          },
          h: {
            '@/sm': '66dvh',
            '@/md': 'calc(100% - 0.5rem)',
          },
          pxi: '4',
          py: '4',
          right: {
            '@/sm': '0',
            '@/md': '1',
          },
          rounded: '2xl',
          shadow: 'lg',
          w: {
            '@/sm': 'calc(100% - 1rem)',
            '@/md': '1/3',
          },
          zIndex: {
            '@/sm': 'popover',
            '@/md': 'initial',
          },
          _expanded: {
            display: {
              '@/sm': 'block',
              '@/md': 'initial',
            },
          },
        }),
      )}
    >
      <div>{props.children}</div>

      <Button
        className={css({
          display: {
            '@/sm': 'inline-flex',
            '@/md': 'none',
          },
        })}
        onClick={props.onClose}
      >
        Close
      </Button>
    </div>
  )
}
