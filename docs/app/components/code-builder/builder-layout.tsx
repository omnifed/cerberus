import { Show } from '@cerberus-design/react'
import { css, cx } from '@cerberus/styled-system/css'
import { cq, hstack, vstack } from '@cerberus/styled-system/patterns'
import { type PropsWithChildren } from 'react'
import BuilderSidebar from './builder-sidebar'
import type { BuilderResult } from './helpers'
import BuilderForm from './builder-form'
import BuilderSnippet from './builder-snippet'

interface CodeBuilderProps {
  api: Record<string, BuilderResult>
  code?: string
}

export default function BuilderLayout(
  props: PropsWithChildren<CodeBuilderProps>,
) {
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
          cerbGradient: 'light-blue',
          flexDirection: {
            '@/sm': 'column',
            '@/md': 'row',
          },
          h: '24rem',
          justify: 'space-between',
          overflow: 'hidden',
          position: 'relative',
          pt: {
            '@/sm': '4',
            '@/md': 'initial',
          },
          rounded: '2xl',
          w: 'full',
        })}
      >
        <div
          className={vstack({
            justify: 'center',
            mx: 'auto',
            w: {
              '@/sm': 'full',
              '@/md': '1/2',
            },
          })}
        >
          {props.children}
        </div>

        <BuilderSidebar>
          <h2
            className={css({
              bgColor: 'page.surface.initial',
              color: 'page.text.100',
              py: '4',
              position: 'sticky',
              textStyle: 'h6',
              top: '0',
              zIndex: 'sticky',
            })}
          >
            Preview Playground
          </h2>

          <BuilderForm api={props.api} />
        </BuilderSidebar>
      </div>

      <Show when={Boolean(props.code)}>
        <footer
          className={css({
            w: 'full',
          })}
        >
          <BuilderSnippet code={props.code!} />
        </footer>
      </Show>
    </section>
  )
}
