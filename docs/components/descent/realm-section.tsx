import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
import { type Realm, type RealmId } from './realms'

interface RealmSectionProps {
  realm: Realm
  heading: string
  children: ReactNode
  people: ReactNode
  agents: ReactNode
  /** The real artifact on the front plane, rendered in this realm's theme. */
  artifact: ReactNode
  /** The realms still below this one, drawn as planes receding behind it. */
  below: RealmId[]
}

/** The front plane rises from depth as it scrolls in, where supported. */
const rising = css({
  '@supports (animation-timeline: view())': {
    _motionSafe: {
      animationFillMode: 'both',
      animationName: 'descend',
      animationRange: 'entry 0% cover 30%',
      animationTimeline: 'view()',
      animationTimingFunction: 'linear',
    },
  },
})

export function RealmSection(props: RealmSectionProps) {
  const { realm } = props
  const headingId = `${realm.id}-heading`

  return (
    <section
      id={realm.id}
      aria-labelledby={headingId}
      data-panda-theme={realm.id}
      className={css({
        display: 'grid',
        gap: '2xl',
        gridTemplateColumns: 'minmax(0, 1fr)',
        py: '4xl',
        scrollMarginTop: 'calc(var(--nav-height) + token(spacing.3xl))',
        xl: {
          alignItems: 'center',
          gap: '3xl',
          gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)',
          minH: '80dvh',
        },
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 'lg',
          maxW: '34rem',
        })}
      >
        <h3
          id={headingId}
          className={css({
            color: 'page.text.initial',
            textStyle: 'heading-xl',
            textWrap: 'balance',
            md: { textStyle: 'heading-2xl' },
          })}
        >
          {props.heading}
        </h3>
        <div
          className={css({
            color: 'page.text.200',
            display: 'flex',
            flexDir: 'column',
            gap: 'md',
            maxW: '60ch',
            textStyle: 'body-lg',
            textWrap: 'pretty',
          })}
        >
          {props.children}
        </div>
        <dl
          className={css({
            borderTop: '1px solid',
            borderColor: 'page.border.initial',
            display: 'grid',
            gap: 'md',
            gridTemplateColumns: '1fr',
            pt: 'lg',
            sm: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
          })}
        >
          <div>
            <dt
              className={css({
                color: 'page.text.initial',
                textStyle: 'label-md',
                fontWeight: 'semibold',
              })}
            >
              For people
            </dt>
            <dd
              className={css({
                color: 'page.text.200',
                textStyle: 'body-sm',
                mt: 'xs',
              })}
            >
              {props.people}
            </dd>
          </div>
          <div>
            <dt
              className={css({
                color: 'page.text.initial',
                textStyle: 'label-md',
                fontWeight: 'semibold',
              })}
            >
              For agents
            </dt>
            <dd
              className={css({
                color: 'page.text.200',
                textStyle: 'body-sm',
                mt: 'xs',
              })}
            >
              {props.agents}
            </dd>
          </div>
        </dl>
      </div>

      <div
        className={css({
          isolation: 'isolate',
          mb: props.below.length ? '4xl' : '0',
          pos: 'relative',
        })}
      >
        {props.below.map((id, i) => (
          <div
            key={id}
            aria-hidden
            data-panda-theme={id}
            className={css({
              bgColor: 'action.bg.initial/12',
              border: '1.5px solid',
              borderColor: 'action.border.initial',
              boxShadow: 'lg',
              h: '70%',
              insetX: '0',
              pos: 'absolute',
              rounded: 'xl',
              top: 'auto',
              bottom: '0',
              transformOrigin: 'center top',
            })}
            style={{
              opacity: 0.9 - i * 0.22,
              transform: `perspective(1400px) translateY(${(i + 1) * 2.25}rem) rotateX(${18 + i * 6}deg) scale(${1 - (i + 1) * 0.06})`,
              zIndex: -1 - i,
            }}
          />
        ))}

        <div
          className={`${rising} ${css({
            bgColor: 'page.surface.100',
            border: '1.5px solid',
            borderColor: 'action.border.initial',
            boxShadow: 'xl',
            pos: 'relative',
            p: 'lg',
            rounded: 'xl',
            md: { p: 'xl' },
          })}`}
        >
          <p
            className={css({
              alignItems: 'baseline',
              display: 'flex',
              flexWrap: 'wrap',
              columnGap: 'sm',
              rowGap: 'xs',
              mb: 'lg',
            })}
          >
            <span
              className={css({
                color: 'action.text.200',
                textStyle: 'heading-xs',
              })}
            >
              {realm.name} · {realm.area}
            </span>
            <span
              className={css({
                color: 'page.text.100',
                fontFamily: 'mono',
                textStyle: 'label-sm',
              })}
            >
              {realm.packages}
            </span>
          </p>
          {props.artifact}
        </div>
      </div>
    </section>
  )
}
