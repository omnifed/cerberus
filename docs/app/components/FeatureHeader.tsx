import { ImageCopy } from '@cerberus-design/icons'
import { Show } from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'
import { cq, grid, gridItem } from '@cerberus-design/styled-system/patterns'
import { vstack } from '@cerberus/styled-system/patterns'
import Image from 'next/image'
import type { PropsWithChildren } from 'react'

export interface FeatureHeaderProps {
  heading: string
  description: string
  src?: string
}

export default function FeatureHeader(
  props: PropsWithChildren<FeatureHeaderProps>,
) {
  return (
    <header
      className={css({
        containerType: 'inline-size',
        mb: '8',
      })}
    >
      <div
        className={css({
          display: {
            '@/lg': 'flex',
          },
          h: {
            '@/lg': '20rem',
          },
          gap: {
            '@/lg': '4',
          },
        })}
      >
        <section
          className={vstack({
            alignItems: 'flex-start',
            bgColor: 'neutral.surface.200',
            h: 'full',
            justify: 'center',
            pxi: '4',
            pb: '4',
            rounded: {
              base: 'xl',
              '@/lg': '1.5em',
            },
            w: {
              '@/lg': '66%',
            },
          })}
        >
          <h1
            className={css({
              fontSize: {
                '@/lg': '4rem !important',
              },
            })}
          >
            {props.heading}
          </h1>
          <p
            className={css({
              textStyle: {
                '@/lg': 'body-lg !important',
              },
              pb: '0 !important',
            })}
          >
            {props.description}
          </p>
        </section>
        <section
          className={vstack({
            display: {
              base: 'none',
              '@/lg': 'flex',
            },
            bgGradient: 'to-t',
            gradientFrom: 'info.surface.initial',
            gradientTo: 'info.border.initial',
            color: 'info.text.initial',
            h: 'full',
            justify: 'center',
            pxi: '4',
            pb: '4',
            rounded: {
              base: 'xl',
              '@/lg': '1.5em',
            },
            w: {
              '@/lg': '33%',
            },
          })}
        >
          <Show when={Boolean(props.src)} fallback={<ImageCopy size={32} />}>
            <Image alt={props.heading} src={props.src!} />
          </Show>
        </section>
      </div>
    </header>
  )
}
