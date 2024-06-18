import { css } from '@cerberus-design/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'
import type { PropsWithChildren } from 'react'
import { MatchFeatureImg, type MatchFeatureKind } from './MatchFeatureImg'

export interface FeatureHeaderProps {
  heading: string
  description: string
  a11y: MatchFeatureKind
}

export default function FeatureHeader(
  props: PropsWithChildren<FeatureHeaderProps>,
) {
  return (
    <header
      className={css({
        containerType: 'inline-size',
        mb: '8',
        pxi: '4',
        md: {
          pxi: 'initial',
        },
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
            bgColor: 'neutral.surface.100',
            h: 'full',
            justify: 'center',
            pxi: {
              base: '4',
              '@/lg': '8',
            },
            pb: '4',
            pt: {
              base: '4',
              '@/lg': 'initial',
            },
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
              textStyle: 'h1',
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
          data-category={props.a11y}
          className={vstack({
            bgGradient: 'to-t',
            display: {
              base: 'none',
              '@/lg': 'flex',
            },
            h: 'full',
            justify: 'center',
            overflow: 'hidden',
            position: 'relative',
            pxi: '4',
            pb: '4',
            rounded: {
              base: 'xl',
              '@/lg': '1.5em',
            },
            w: {
              '@/lg': '33%',
            },
            '&:is([data-category=touch-target])': {
              gradientFrom: 'info.surface.initial',
              gradientTo: 'info.border.initial',
              color: 'neutral.surface.300',
            },
            '&:is([data-category=forms])': {
              gradientFrom: 'warning.surface.initial',
              gradientTo: 'warning.border.initial',
              color: 'warning.text.initial',
            },
            '&:is([data-category=menus])': {
              gradientFrom: 'success.surface.initial',
              gradientTo: 'success.border.initial',
              color: 'success.text.200',
            },
            '&:is([data-category=utilities])': {
              gradientFrom: 'action.bg.initial',
              gradientTo: 'action.border.initial',
              color: 'neutral.surface.200',
            },
          })}
        >
          <MatchFeatureImg kind={props.a11y} />
        </section>
      </div>
    </header>
  )
}
