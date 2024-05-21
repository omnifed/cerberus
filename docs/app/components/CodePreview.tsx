'use client'

import { useState, type PropsWithChildren, type ReactNode } from 'react'
import { Show } from '@cerberus-design/react'
import { Code, CodeHide } from '@cerberus-design/icons'
import { css } from '@/styled-system/css'
import { hstack, vstack } from '@/styled-system/patterns'

// TODO: Replace with Badge component
// TODO: Replace with Button component

const tempBtnStyles = css({
  alignItems: 'center',
  display: 'inline-flex',
  gap: '2',
})

interface CodePreviewProps {
  preview: ReactNode
}

export default function CodePreview(
  props: PropsWithChildren<CodePreviewProps>,
) {
  const [viewCode, setViewCode] = useState<boolean>(false)

  function handleShowCode() {
    setViewCode(true)
  }

  function handleHideCode() {
    setViewCode(false)
  }

  return (
    <Show
      when={viewCode}
      fallback={
        <PreviewLayout onShowCode={handleShowCode}>
          {props.preview}
        </PreviewLayout>
      }
    >
      <header
        className={hstack({
          bgColor: 'neutral.surface.100',
          justifyContent: 'flex-end',
          p: '4',
        })}
      >
        <button
          className={tempBtnStyles}
          onClick={handleHideCode}
          type="button"
        >
          Hide code
          <CodeHide aria-hidden size="1.5rem" />
        </button>
      </header>
      {props.children}
    </Show>
  )
}

interface PreviewLayoutProps {
  onShowCode: () => void
}

export function PreviewLayout(props: PropsWithChildren<PreviewLayoutProps>) {
  return (
    <div>
      <header
        className={hstack({
          justifyContent: 'flex-end',
          p: '4',
        })}
      >
        <button
          className={tempBtnStyles}
          onClick={props.onShowCode}
          type="button"
        >
          Show code
          <Code aria-hidden size="1.5rem" />
        </button>
      </header>
      <section
        className={vstack({
          bgColor: 'neutral.surface.200',
          border: '3px solid',
          borderColor: 'info.border.initial',
          borderRadius: 'xl',
          justify: 'center',
          mb: '4',
          minH: '18.75rem',
          overflow: 'hidden',
          position: 'relative',
          py: '8',
        })}
      >
        <span
          className={css({
            bgColor: 'neutral.surface.initial',
            pxi: '2',
            rounded: 'md',
            position: 'absolute',
            top: '4',
            left: '4',
            textStyle: 'body-xs',
            textTransform: 'uppercase',
            zIndex: 'banner',
          })}
        >
          preview mode
        </span>

        {props.children}
      </section>
    </div>
  )
}
