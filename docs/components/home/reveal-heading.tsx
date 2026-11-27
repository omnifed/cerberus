'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Fragment, useEffect, useRef, type ElementType } from 'react'
import { css } from 'styled-system/css'
import { useExperience } from './experience'

interface RevealHeadingProps {
  as?: ElementType
  id?: string
  className?: string
  /** Plain text only: links and inline markup are never split. A newline sets a line break. */
  children: string
  /** Seconds between words. */
  stagger?: number
}

const srOnly = css({ srOnly: true })
/**
 * Each word rises inside its own clip. Display type is set tighter than the
 * glyphs are tall (line height 0.86 to 1.02), so the clip reaches past the
 * line box for ascenders and descenders, and negative margins give the space
 * back so the lines keep their rhythm.
 */
export const wordClip = css({
  display: 'inline-block',
  mb: '-0.28em',
  mt: '-0.18em',
  // Clip only vertically, so tight tracking never shaves a letter's side.
  overflowX: 'visible',
  overflowY: 'clip',
  pb: '0.28em',
  pt: '0.18em',
  verticalAlign: 'top',
})

/**
 * A heading that reveals word by word when it scrolls into view. Assistive
 * technology reads the unsplit text; the split words are decorative. Without
 * JavaScript, or under reduced motion, every word is simply there.
 */
export function RevealHeading(props: RevealHeadingProps) {
  const { as: Tag = 'h2', children, className, id, stagger = 0.05 } = props
  const { motion } = useExperience()
  const ref = useRef<HTMLElement>(null)
  const lines = children
    .split('\n')
    .map((line) => line.split(/\s+/).filter(Boolean))

  useEffect(() => {
    const el = ref.current
    if (!motion || !el) return
    // Never hide what someone is already reading.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return

    const targets = el.querySelectorAll('[data-word]')
    const ctx = gsap.context(() => {
      gsap.set(targets, { yPercent: 110 })
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () =>
          gsap.to(targets, {
            yPercent: 0,
            duration: 1.1,
            ease: 'expo.out',
            stagger,
          }),
      })
    }, el)
    return () => ctx.revert()
  }, [motion, stagger])

  return (
    <Tag ref={ref} id={id} className={className}>
      <span className={srOnly}>{children.replace(/\n/g, ' ')}</span>
      <span aria-hidden="true">
        {lines.map((words, l) => (
          <Fragment key={l}>
            {l > 0 && <br />}
            {words.map((word, i) => (
              <Fragment key={`${word}-${i}`}>
                <span className={wordClip}>
                  <span data-word className={css({ display: 'inline-block' })}>
                    {word}
                  </span>
                </span>
                {i < words.length - 1 ? ' ' : null}
              </Fragment>
            ))}
          </Fragment>
        ))}
      </span>
    </Tag>
  )
}
