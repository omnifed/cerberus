import { type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import type { PoseName } from './world/poses'
import { RevealHeading } from './reveal-heading'
import { container, displayStatement, lead } from './styles'

/**
 * A pool of page color centered inside its own box and fading to nothing
 * before any edge, so copy reads over the world without a visible seam.
 */
export const pool = css({
  backgroundImage:
    'radial-gradient(closest-side, color-mix(in srgb, token(colors.page.bg.initial) 86%, transparent), color-mix(in srgb, token(colors.page.bg.initial) 70%, transparent) 60%, transparent)',
  pointerEvents: 'none',
  pos: 'absolute',
  zIndex: '-1',
})

type Layout = 'split' | 'split-reverse' | 'stacked'

const themedVeil = css({
  isolation: 'isolate',
  pos: 'relative',
  _before: {
    bgColor: 'page.bg.initial/85',
    content: '""',
    inset: '0',
    maskImage:
      'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)',
    pointerEvents: 'none',
    pos: 'absolute',
    transitionDuration: 'slow',
    transitionProperty: 'background-color',
    zIndex: '-1',
  },
})

interface BeatProps {
  id: string
  pose: PoseName
  /** The HUD's name for this part of the story. */
  label: string
  heading: string
  children: ReactNode
  plate: ReactNode
  layout?: Layout
  /** Small actions under the copy: links, tags. */
  aside?: ReactNode
  /** Repaints the whole beat in a theme, behind a feathered veil of its page color. */
  theme?: string
}

const layouts: Record<Layout, string> = {
  split: css({
    lg: {
      alignItems: 'center',
      gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)',
    },
  }),
  'split-reverse': css({
    lg: {
      alignItems: 'center',
      gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)',
      '& > [data-slot=copy]': { order: 2 },
    },
  }),
  stacked: css({}),
}

/**
 * One beat of the story: a claim, the copy that earns it, and a live plate
 * made from real Cerberus components. The world behind it takes the pose
 * named here.
 */
export function Beat(props: BeatProps) {
  const layout = props.layout ?? 'split'
  const headingId = `${props.id}-heading`
  return (
    <section
      id={props.id}
      aria-labelledby={headingId}
      data-pose={props.pose}
      data-hud={props.label}
      data-panda-theme={props.theme}
      className={cx(
        css({
          alignItems: 'center',
          color: 'page.text.initial',
          display: 'flex',
          minH: '100svh',
          py: '4xl',
          scrollMarginTop: 'var(--nav-height)',
          md: { py: '32' },
        }),
        props.theme && themedVeil,
      )}
    >
      <div
        className={cx(
          container,
          layouts[layout],
          css({
            display: 'grid',
            gap: '3xl',
            gridTemplateColumns: 'minmax(0, 1fr)',
          }),
        )}
      >
        <div
          data-slot="copy"
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: 'lg',
            isolation: 'isolate',
            maxW: layout === 'stacked' ? '52rem' : '36rem',
            pos: 'relative',
          })}
        >
          <span aria-hidden className={cx(pool, css({ inset: '-35% -22%' }))} />
          <RevealHeading as="h2" id={headingId} className={displayStatement}>
            {props.heading}
          </RevealHeading>
          <div
            className={cx(
              lead,
              css({
                color: 'page.text.initial',
                display: 'flex',
                flexDir: 'column',
                gap: 'md',
              }),
            )}
          >
            {props.children}
          </div>
          {props.aside}
        </div>
        <div data-plate className={css({ minW: '0' })}>
          {props.plate}
        </div>
      </div>
    </section>
  )
}

/** A surface for a live plate. */
export const plateSurface = css({
  bgColor: 'page.surface.100',
  border: '1px solid',
  borderColor: 'page.border.initial',
  boxShadow: '2xl',
  color: 'page.text.initial',
  p: 'lg',
  rounded: 'xl',
  md: { p: 'xl' },
})

/** A small caption that names what a plate is showing. */
export const plateCaption = css({
  color: 'page.text.100',
  textStyle: 'label-sm',
})
