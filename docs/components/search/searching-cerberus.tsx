'use client'

import { css, cx } from '@/styled-system/css'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { CerberusLogo } from '../logos/cerberus'

/**
 * Search loader: "the lantern finds the hound".
 *
 * The Cerberus mark waits almost invisible in the dark. A pool of lantern
 * light drifts across it and lingers on each head in turn (left, center,
 * right), and each head it finds lights one of the three dots after the
 * label. Then the light sinks back to the chest and the watch begins again.
 *
 * The mark is the team's own brand asset (components/logos/cerberus.tsx),
 * drawn twice: a ghost copy, and a lit copy masked by a radial gradient
 * whose center, radius and strength are CSS variables tweened by GSAP.
 *
 * Without JS or under reduced motion the CSS defaults render the final
 * still: light resting on the center head, label and dots fully visible.
 */

// Lantern stops as percentages of the mark's box
const CHEST = { x: 50, y: 70 }
const HEADS = [
  { x: 24, y: 42 },
  { x: 50, y: 48 },
  { x: 76, y: 42 },
]

const WORDS = ['Searching', 'the', 'Underworld']

export function SearchingCerberus() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return

    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const q = gsap.utils.selector(el)
      const dots = q('[data-dot]')

      // Hold back ~140ms so a fast index load never flashes the loader
      const intro = gsap.timeline({ delay: 0.14 })
      intro
        .fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.24 })
        .fromTo(
          el,
          {
            '--lx': `${CHEST.x}%`,
            '--ly': `${CHEST.y}%`,
            '--lr': '0%',
            '--lit': 0,
          },
          {
            '--lr': '34%',
            '--lit': 1,
            duration: 0.7,
            ease: 'expo.out',
          },
          '<',
        )
        .from(
          q('[data-word]'),
          {
            autoAlpha: 0,
            yPercent: 60,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power3.out',
          },
          '<0.08',
        )
        .set(dots, { opacity: 0.2 }, 0)

      // The watch: visit each head, light its dot, sink back, repeat
      const watch = gsap.timeline({ repeat: -1, paused: true })
      HEADS.forEach((head, i) => {
        watch
          .to(el, {
            '--lx': `${head.x}%`,
            '--ly': `${head.y}%`,
            duration: i === 0 ? 0.75 : 0.6,
            ease: 'sine.inOut',
          })
          // a brief catch of the flame as the light lands
          .to(el, { '--lr': '38%', duration: 0.16, ease: 'power2.out' })
          .to(dots[i], { opacity: 1, scale: 1.25, duration: 0.2 }, '<')
          .to(el, { '--lr': '34%', duration: 0.4, ease: 'sine.out' })
          .to(dots[i], { scale: 1, duration: 0.3 }, '<')
      })
      watch
        .to(el, {
          '--lx': `${CHEST.x}%`,
          '--ly': `${CHEST.y}%`,
          '--lr': '26%',
          duration: 0.7,
          ease: 'sine.inOut',
        })
        .to(dots, { opacity: 0.2, duration: 0.5 }, '<0.2')
        .to(el, { '--lr': '34%', duration: 0.3, ease: 'sine.out' })

      intro.add(() => {
        watch.play()
      }, 0.5)

      // A living flame rather than a constant: tiny, randomized flicker
      const flicker = gsap.to(el, {
        '--flame': 'random(0.86, 1)',
        duration: 0.12,
        ease: 'none',
        repeat: -1,
        repeatRefresh: true,
      })

      return () => {
        intro.kill()
        watch.kill()
        flicker.kill()
      }
    })

    // mm.revert() kills every tween and restores the inline styles GSAP set
    return () => mm.revert()
  }, [])

  return (
    // The live region never fades, so the announcement is not swallowed
    // while the visuals are still hidden during the intro.
    <div className={stage} role="status">
      <span className={srOnly}>Searching the Underworld…</span>
      <div ref={root} aria-hidden="true" className={lantern}>
        <div className={mark}>
          <div className={glow} />
          <div className={cx(layer, ghost)}>
            <CerberusLogo />
          </div>
          <div className={cx(layer, lit)}>
            <CerberusLogo />
          </div>
        </div>

        {/* Screen readers get the label whole above; these split words are
            visual only */}
        <p className={label}>
          <span className={words}>
            {WORDS.map((word) => (
              <span key={word} data-word className={wordCss}>
                {word}
              </span>
            ))}
            <span className={dotRow}>
              {HEADS.map((head) => (
                <span key={head.x} data-dot className={dot} />
              ))}
            </span>
          </span>
        </p>
      </div>
    </div>
  )
}

const stage = css({
  display: 'grid',
  placeItems: 'center',
  h: 'full',
  minH: '20rem',
})

const lantern = css({
  // Still-frame defaults; GSAP tweens these
  '--lx': '50%',
  '--ly': '48%',
  '--lr': '34%',
  '--lit': '1',
  '--flame': '1',
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  gap: 'lg',
})

const mark = css({
  position: 'relative',
  w: '7.5rem',
  aspectRatio: 'square',
})

const layer = css({
  position: 'absolute',
  inset: '0',
  '& svg': { display: 'block', w: 'full', h: 'full' },
})

// The hound waiting in the dark: present, but barely
const ghost = css({
  opacity: 0.1,
  filter: 'grayscale(1)',
  // On a light page the same ghost reads as a gray sticker; pull it back
  _light: { opacity: 0.05 },
})

// Only what the lantern touches is in full color
const lit = css({
  opacity: 'calc(var(--lit) * var(--flame))',
  maskImage:
    'radial-gradient(ellipse var(--lr) var(--lr) at var(--lx) var(--ly), #000 0%, rgb(0 0 0 / 0.85) 40%, transparent 100%)',
})

// Warm spill behind the mark, tinted by each theme's brand color
const glow = css({
  position: 'absolute',
  inset: '-35%',
  pointerEvents: 'none',
  opacity: 'calc(var(--lit) * var(--flame) * 0.5)',
  bgImage:
    'radial-gradient(ellipse calc(var(--lr) * 0.8) calc(var(--lr) * 0.8) at calc(20.6% + var(--lx) * 0.588) calc(20.6% + var(--ly) * 0.588), color-mix(in oklab, var(--cerberus-colors-action-bg-initial) 55%, transparent), transparent 100%)',
})

const label = css({
  color: 'page.text.100',
  fontStyle: 'italic',
  textStyle: 'label-sm',
})

const srOnly = css({ srOnly: true })

const words = css({
  display: 'inline-flex',
  alignItems: 'baseline',
  gap: '0.3em',
})

const wordCss = css({ display: 'inline-block' })

const dotRow = css({
  display: 'inline-flex',
  gap: '0.28em',
  ms: '0.05em',
})

// One dot per head; each lights when the lantern finds its head
const dot = css({
  bgColor: 'action.bg.initial',
  rounded: 'full',
  display: 'inline-block',
  w: '0.28em',
  h: '0.28em',
})
