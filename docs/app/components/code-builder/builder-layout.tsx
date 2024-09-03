'use client'

import { Menu } from '@cerberus-design/icons'
import { IconButton } from '@cerberus-design/react'
import { css, cx } from '@cerberus/styled-system/css'
import { cq, hstack, vstack } from '@cerberus/styled-system/patterns'
import { useCallback, useState, type PropsWithChildren } from 'react'
import BuilderSidebar from './builder-sidebar'
import type { BuilderResult } from './helpers'
import BuilderForm from './builder-form'

interface CodeBuilderProps {
  api: Record<string, BuilderResult>
}

export default function BuilderLayout(
  props: PropsWithChildren<CodeBuilderProps>,
) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  const handleToggleSidebar = useCallback(() => {
    setShowSidebar((prev) => !prev)
  }, [])

  return (
    <section
      className={cx(
        cq({
          mb: '6',
        }),
        vstack(),
      )}
    >
      <div
        className={hstack({
          cerbGradient: 'purple',
          h: {
            '@/sm': '20rem',
            '@/md': '24rem',
          },
          justify: 'space-between',
          overflow: 'hidden',
          position: 'relative',
          rounded: '2xl',
          w: 'full',
        })}
      >
        <div
          className={vstack({
            justify: 'center',
            mx: 'auto',
          })}
        >
          {props.children}
        </div>

        <div
          className={css({
            display: {
              '@/sm': 'inline-block',
              '@/md': 'none',
            },
            position: 'absolute',
            right: 2,
            top: 2,
            zIndex: 'decorator',
          })}
        >
          <IconButton ariaLabel="Show options" onClick={handleToggleSidebar}>
            <span
              className={css({
                color: 'black',
              })}
            >
              <Menu size={32} />
            </span>
          </IconButton>
        </div>

        <BuilderSidebar expanded={showSidebar} onClose={handleToggleSidebar}>
          <h2
            className={css({
              color: 'page.text.100',
              mb: '4',
              textStyle: 'h6',
            })}
          >
            Preview Playground
          </h2>

          <BuilderForm api={props.api} />
        </BuilderSidebar>
      </div>

      <footer
        className={cx(
          'expressive-code',
          css({
            w: 'full',
          }),
        )}
      >
        <pre data-language="tsx">
          <code>some code</code>
        </pre>
      </footer>
    </section>
  )
}
