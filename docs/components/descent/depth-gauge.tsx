'use client'

import { useEffect, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { FAR_SHORE, REALMS } from './realms'

const STOPS = [...REALMS, FAR_SHORE]

/**
 * The Descent's depth gauge, which is also the ecosystem map. Each stop links
 * to its realm, and the stop for the realm in the middle of the viewport is
 * marked as the current location.
 */
export function DepthGauge() {
  const [current, setCurrent] = useState<string | null>(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const targets = STOPS.map((stop) =>
      document.getElementById(stop.id),
    ).filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setCurrent(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Ecosystem depth"
      className={css({
        bgColor: 'page.surface.100',
        borderBottom: '1px solid',
        borderColor: 'page.border.initial',
        lg: {
          bgColor: 'transparent',
          borderBottom: 'none',
        },
      })}
    >
      <ol
        className={css({
          display: 'flex',
          gap: 'md',
          overflowX: 'auto',
          px: 'md',
          py: 'sm',
          scrollbarWidth: 'none',
          lg: {
            flexDir: 'column',
            gap: '0',
            overflowX: 'visible',
            pl: '0',
            pr: '0',
            py: '0',
          },
        })}
      >
        {STOPS.map((stop, i) => {
          const isFarShore = stop.id === FAR_SHORE.id
          const isCurrent = current === stop.id
          return (
            <li
              key={stop.id}
              className={css({ flexShrink: 0, pos: 'relative' })}
            >
              {i < STOPS.length - 1 && (
                <span
                  aria-hidden
                  data-panda-theme={isFarShore ? undefined : stop.id}
                  className={css({
                    display: 'none',
                    lg: {
                      bgColor: 'action.bg.initial',
                      display: 'block',
                      left: '0.4375rem',
                      pos: 'absolute',
                      top: '1.25rem',
                      bottom: '-0.25rem',
                      w: '2px',
                    },
                  })}
                />
              )}
              <a
                aria-current={isCurrent ? 'location' : undefined}
                href={`#${stop.id}`}
                className={css({
                  alignItems: 'center',
                  color: 'page.text.100',
                  display: 'flex',
                  gap: 'sm',
                  rounded: 'sm',
                  textDecoration: 'none',
                  transitionDuration: 'normal',
                  transitionProperty: 'color',
                  _hover: { color: 'page.text.initial' },
                  _focusVisible: { focusVisibleRing: 'outside' },
                  '&[aria-current=location]': { color: 'page.text.initial' },
                  lg: {
                    alignItems: 'flex-start',
                    gap: 'md',
                    pb: 'xl',
                  },
                })}
              >
                <span
                  aria-hidden
                  data-panda-theme={isFarShore ? undefined : stop.id}
                  data-current={isCurrent}
                  className={cx(
                    css({
                      borderColor: 'action.bg.initial',
                      borderStyle: 'solid',
                      borderWidth: '2px',
                      flexShrink: 0,
                      h: '4',
                      mt: '0',
                      pos: 'relative',
                      rounded: 'full',
                      transitionDuration: 'normal',
                      transitionProperty: 'background-color, box-shadow',
                      w: '4',
                      zIndex: 'decorator',
                      bgColor: 'page.bg.initial',
                      '&[data-current=true]': {
                        bgColor: 'action.bg.initial',
                        boxShadow: '0 0 0 4px token(colors.action.ghost.hover)',
                      },
                      lg: { mt: '0.125rem' },
                    }),
                    isFarShore &&
                      css({
                        borderColor: 'page.text.100',
                        borderStyle: 'dashed',
                      }),
                  )}
                />
                <span
                  className={css({
                    display: 'flex',
                    flexDir: 'column',
                    gap: '2xs',
                  })}
                >
                  <span
                    className={css({
                      display: 'none',
                      fontFamily: 'mono',
                      fontVariantNumeric: 'tabular-nums',
                      textStyle: 'label-sm',
                      lg: { display: 'block' },
                    })}
                  >
                    {stop.depth}
                  </span>
                  <span
                    className={css({
                      fontWeight: 'semibold',
                      textStyle: 'label-sm',
                      lg: { textStyle: 'heading-xs' },
                    })}
                  >
                    {stop.name}
                  </span>
                  <span
                    className={css({
                      display: 'none',
                      textStyle: 'label-sm',
                      lg: { display: 'block' },
                    })}
                  >
                    {stop.area}
                  </span>
                  <span
                    className={css({
                      color: 'page.text.100',
                      display: 'none',
                      fontFamily: 'mono',
                      textStyle: 'label-sm',
                      lg: { display: 'block' },
                    })}
                  >
                    {stop.packages}
                  </span>
                </span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
