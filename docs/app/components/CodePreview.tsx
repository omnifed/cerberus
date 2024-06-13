'use client'

import { useState, type PropsWithChildren, type ReactNode } from 'react'
import { Button, Show } from '@cerberus-design/react'
import { Code, CodeHide } from '@cerberus-design/icons'
import { css } from '@cerberus/styled-system/css'
import { hstack, vstack } from '@cerberus/styled-system/patterns'

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
        <PreviewLayout onShowCode={props.children ? handleShowCode : undefined}>
          {props.preview}
        </PreviewLayout>
      }
    >
      <header
        className={hstack({
          bgColor: 'neutral.surface.100',
          justifyContent: 'flex-end',
          py: '4',
        })}
      >
        <Button onClick={handleHideCode} usage="text" type="button">
          Hide code
          <CodeHide aria-hidden size="1.5rem" />
        </Button>
      </header>
      {props.children}
    </Show>
  )
}

interface PreviewLayoutProps {
  onShowCode?: () => void
}

export function PreviewLayout(props: PropsWithChildren<PreviewLayoutProps>) {
  return (
    <div>
      <header
        className={hstack({
          justifyContent: 'flex-end',
          py: '4',
        })}
      >
        <Show when={Boolean(props.onShowCode)}>
          <Button onClick={props.onShowCode} usage="text" type="button">
            Show code
            <Code aria-hidden size="1.5rem" />
          </Button>
        </Show>
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
            zIndex: 'decorator',
          })}
        >
          preview mode
        </span>

        {props.children}
      </section>
    </div>
  )
}
