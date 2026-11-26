'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { css } from 'styled-system/css'

const WORD = 'Cerberus'

/**
 * The name at the scale of the page. Its letters rise into place as the
 * footer arrives, and run off the bottom edge. Decorative: the logo link in
 * the footer is the accessible name. Under reduced motion it simply sits
 * there.
 */
export function FooterWordmark() {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-letter]',
        { yPercent: 70 },
        {
          yPercent: 0,
          ease: 'none',
          stagger: 0.04,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 0.8,
          },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <p
      ref={ref}
      aria-hidden
      className={css({
        color: 'page.text.initial',
        display: 'flex',
        fontSize: 'clamp(4rem, 0.5rem + 18.5vw, 23rem)',
        fontWeight: 'bold',
        justifyContent: 'center',
        letterSpacing: '-0.065em',
        lineHeight: '0.74',
        // The letters run off the bottom edge; the footer clips them.
        mb: '-0.12em',
        overflow: 'hidden',
        pointerEvents: 'none',
        pt: '0.06em',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      })}
    >
      {WORD.split('').map((letter, i) => (
        <span
          key={i}
          data-letter
          className={css({ display: 'inline-block', willChange: 'transform' })}
        >
          {letter}
        </span>
      ))}
    </p>
  )
}
