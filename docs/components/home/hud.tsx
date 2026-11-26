'use client'

import { useEffect, useRef, useState } from 'react'
import { css } from 'styled-system/css'

export interface HudItem {
  id: string
  label: string
}

/**
 * A ruler down the right edge on wide screens: where you are in the story,
 * and a way to jump to any part of it. Every label is real link text; only
 * the ticks show until you hover or focus the ruler.
 */
export function Hud(props: { items: HudItem[] }) {
  const [active, setActive] = useState<string | null>(null)
  const fillRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const sections = props.items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    let raf = 0
    const update = () => {
      raf = 0
      const focusLine = window.innerHeight * 0.45
      let current: string | null = null
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= focusLine) current = el.id
      }
      // Step aside once the footer arrives; it has its own navigation.
      const footer = document.querySelector('footer')
      if (
        footer &&
        footer.getBoundingClientRect().top < window.innerHeight * 0.7
      )
        current = null
      setActive(current)
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      fillRef.current?.style.setProperty('--progress', String(progress))
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [props.items])

  return (
    <nav
      aria-label="Sections of this page"
      data-visible={active !== null}
      className={css({
        display: 'none',
        insetInlineEnd: 'lg',
        opacity: 0,
        pos: 'fixed',
        top: '50%',
        transform: 'translateY(-50%)',
        transitionDuration: 'slow',
        transitionProperty: 'opacity',
        zIndex: 'sticky',
        _focusWithin: { opacity: 1 },
        '&[data-visible=true]': { opacity: 1 },
        xl: { display: 'block' },
        '& [data-label]': { opacity: 0, transform: 'translateX(6px)' },
        '&:is(:hover, :focus-within) [data-label]': {
          opacity: 1,
          transform: 'none',
        },
      })}
    >
      <span
        aria-hidden
        className={css({
          bgColor: 'page.border.initial',
          insetBlock: '0',
          insetInlineEnd: '0',
          pos: 'absolute',
          w: '1px',
        })}
      >
        <span
          ref={fillRef}
          className={css({
            bgColor: 'page.text.initial',
            display: 'block',
            h: 'full',
            transform: 'scaleY(var(--progress, 0))',
            transformOrigin: 'top',
          })}
        />
      </span>
      <ol
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 'md',
          pr: 'md',
        })}
      >
        {props.items.map((item) => {
          const current = item.id === active
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={current ? 'location' : undefined}
                className={css({
                  alignItems: 'center',
                  color: 'page.text.100',
                  display: 'flex',
                  gap: 'sm',
                  justifyContent: 'flex-end',
                  rounded: 'xs',
                  textStyle: 'label-sm',
                  _hover: { color: 'page.text.initial' },
                  _focusVisible: { focusVisibleRing: 'outside' },
                  '&[aria-current=location]': {
                    color: 'page.text.initial',
                    '& [data-tick]': { bgColor: 'page.text.initial', w: '6' },
                  },
                })}
              >
                <span
                  data-label
                  className={css({
                    bgColor: 'page.bg.initial/70',
                    px: 'xs',
                    rounded: 'xs',
                    transitionDuration: 'normal',
                    transitionProperty: 'opacity, transform',
                    whiteSpace: 'nowrap',
                  })}
                >
                  {item.label}
                </span>
                <span
                  aria-hidden
                  data-tick
                  className={css({
                    bgColor: 'page.text.100',
                    display: 'block',
                    flexShrink: 0,
                    h: '1px',
                    transitionDuration: 'normal',
                    transitionProperty: 'width, background-color',
                    w: '3',
                  })}
                />
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
