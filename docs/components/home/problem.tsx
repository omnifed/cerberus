'use client'

import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { css, cx } from 'styled-system/css'
import { pool } from './beat'
import { useExperience } from './experience'
import { RevealHeading } from './reveal-heading'
import { container, displayHero, displayStatement, lead } from './styles'

const CHAIN =
  'A design becomes a ticket. The ticket becomes code. The code becomes a prompt for an agent that never saw the design.'

/**
 * The problem, told while the organism's three streams come apart, then the
 * answer as they braid back into one. The chain lights up word by word as you
 * read down the page; every word is real text from the start.
 */
export function Problem() {
  const { motion } = useExperience()
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!motion || !el) return
    const words = el.querySelectorAll('[data-lit]')
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.18 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 30%',
            scrub: 0.6,
          },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [motion])

  return (
    <>
      <section
        id="problem"
        aria-labelledby="problem-heading"
        data-pose="problem"
        data-hud="The problem"
        className={css({
          alignItems: 'center',
          display: 'flex',
          minH: '130svh',
          py: '4xl',
          scrollMarginTop: 'var(--nav-height)',
        })}
      >
        <div
          className={cx(
            container,
            css({ display: 'flex', flexDir: 'column', gap: '2xl' }),
          )}
        >
          <div
            className={css({
              isolation: 'isolate',
              maxW: '58rem',
              pos: 'relative',
            })}
          >
            <span
              aria-hidden
              className={cx(pool, css({ inset: '-25% -12%' }))}
            />
            <p
              ref={ref}
              className={cx(
                displayStatement,
                css({ color: 'page.text.initial' }),
              )}
            >
              {CHAIN.split(' ').map((word, i) => (
                <span key={`${word}-${i}`}>
                  <span data-lit>{word}</span>{' '}
                </span>
              ))}
            </p>
          </div>
          <RevealHeading
            id="problem-heading"
            className={cx(displayHero, css({ maxW: '14ch' }))}
          >
            Every handoff loses something.
          </RevealHeading>
        </div>
      </section>

      <section
        aria-labelledby="answer-heading"
        data-pose="answer"
        className={css({
          alignItems: 'center',
          display: 'flex',
          minH: '100svh',
          py: '4xl',
        })}
      >
        <div
          className={cx(
            container,
            css({
              alignItems: 'center',
              display: 'flex',
              flexDir: 'column',
              gap: 'xl',
              textAlign: 'center',
            }),
          )}
        >
          <div
            className={css({
              isolation: 'isolate',
              maxW: '56rem',
              pos: 'relative',
            })}
          >
            <span
              aria-hidden
              className={cx(pool, css({ inset: '-35% -14%' }))}
            />
            <RevealHeading id="answer-heading" className={displayStatement}>
              Cerberus gives designers, developers and agents one shared
              language.
            </RevealHeading>
          </div>
          <div
            className={css({
              isolation: 'isolate',
              maxW: '40rem',
              pos: 'relative',
            })}
          >
            <span
              aria-hidden
              className={cx(pool, css({ inset: '-50% -12%' }))}
            />
            <p className={cx(lead, css({ color: 'page.text.initial' }))}>
              The same components, the same tokens and the same names, from a
              designer’s first prototype to the code an agent writes and the
              release a developer ships. Nothing is lost between them.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
