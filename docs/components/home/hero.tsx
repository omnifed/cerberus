'use client'

import { ArrowRight } from '@carbon/icons-react'
import { version } from '@cerberus-design/react/package.json'
import { gsap } from 'gsap'
import Link from 'next/link'
import { Fragment, useEffect, useRef, type RefObject } from 'react'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'
import { pool } from './beat'
import { useExperience } from './experience'
import { InstallLine } from './install-line'
import { wordClip } from './reveal-heading'
import { WorkflowStage } from './workflow-stage'
import { container, displayHero, fine, lead, textLink } from './styles'

const HEADLINE = 'One workflow for humans and agents to ship product.'

const MINDS = [
  {
    name: 'Designers',
    role: 'prototype',
    dot: css({ bgColor: 'dataViz.qualitative.100' }),
  },
  {
    name: 'Developers',
    role: 'ship',
    dot: css({ bgColor: 'dataViz.qualitative.300' }),
  },
  {
    name: 'Agents',
    role: 'work beside both',
    dot: css({ bgColor: 'dataViz.qualitative.500' }),
  },
]

const FACTS = [
  'Open source',
  `v${version}`,
  'Agent-ready docs',
  'Section 508 compliant',
]

/**
 * The page's arrival: the headline rises word by word, the supporting rows
 * follow, then the product window. It is short, plays once at the top of the
 * page, and every element is already in place without it.
 */
function useHeroIntro(ref: RefObject<HTMLElement | null>) {
  const { motion } = useExperience()
  useEffect(() => {
    const el = ref.current
    if (!motion || !el) return
    // Arriving mid-page (a restored scroll, an anchor): nothing to stage.
    if (window.scrollY > window.innerHeight * 0.4) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.from('[data-hero-word]', {
        yPercent: 118,
        duration: 1.05,
        stagger: 0.055,
      })
        .from(
          '[data-hero-rise]',
          { y: 18, opacity: 0, duration: 0.9, stagger: 0.07 },
          0.35,
        )
        .from(
          '[data-hero-stage]',
          { y: 28, opacity: 0, duration: 1.2, ease: 'power3.out' },
          0.5,
        )
      // Focus arriving early finishes the intro at once.
      el.addEventListener('focusin', () => tl.progress(1), { once: true })
    }, el)
    return () => ctx.revert()
  }, [motion, ref])
}

/**
 * The first viewport: the message on the left, and on the right the product
 * itself, one feature moving from idea to production.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null)
  useHeroIntro(ref)
  return (
    <section
      ref={ref}
      aria-labelledby="hero-heading"
      data-pose="hero"
      className={css({
        display: 'grid',
        gridTemplateRows: '1fr auto',
        minH: 'calc(100svh - var(--nav-height))',
      })}
    >
      <div
        className={cx(
          container,
          css({
            alignItems: 'center',
            alignSelf: 'center',
            columnGap: '3xl',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            py: 'xl',
            rowGap: '2xl',
            xl: { gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 6fr)' },
          }),
        )}
      >
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: 'lg',
            minW: '0',
          })}
        >
          <div
            className={css({
              isolation: 'isolate',
              maxW: '62rem',
              pos: 'relative',
            })}
          >
            <span
              aria-hidden
              className={cx(pool, css({ inset: '-30% -12%' }))}
            />
            <h1
              id="hero-heading"
              className={cx(
                displayHero,
                // Short enough that the facts and the scroll cue stay in the first viewport.
                css({
                  fontSize: 'clamp(3rem, 1.2rem + 6.4vw, 8rem)',
                  maxW: '15ch',
                  xl: {
                    fontSize: 'clamp(3rem, 0.4rem + 4.4vw, min(6.5rem, 10svh))',
                  },
                }),
              )}
            >
              <span className={css({ srOnly: true })}>{HEADLINE}</span>
              <span aria-hidden="true">
                {HEADLINE.split(' ').map((word, i, words) => (
                  <Fragment key={`${word}-${i}`}>
                    <span className={wordClip}>
                      <span
                        data-hero-word
                        className={css({ display: 'inline-block' })}
                      >
                        {word}
                      </span>
                    </span>
                    {i < words.length - 1 ? ' ' : null}
                  </Fragment>
                ))}
              </span>
            </h1>
          </div>

          <ul
            data-hero-rise
            aria-label="Who Cerberus is for"
            className={css({
              columnGap: 'lg',
              display: 'flex',
              flexWrap: 'wrap',
              rowGap: 'sm',
            })}
          >
            {MINDS.map((mind) => (
              <li
                key={mind.name}
                className={css({
                  alignItems: 'center',
                  bgColor: 'page.surface.100/80',
                  border: '1px solid',
                  borderColor: 'page.border.initial',
                  display: 'flex',
                  gap: 'sm',
                  px: 'md',
                  py: 'xs',
                  rounded: 'full',
                  textStyle: 'label-md',
                })}
              >
                <span
                  aria-hidden
                  className={cx(
                    mind.dot,
                    css({
                      display: 'inline-block',
                      h: '2',
                      rounded: 'full',
                      w: '2',
                    }),
                  )}
                />
                <span className={css({ fontWeight: 'semibold' })}>
                  {mind.name}
                </span>
                <span className={css({ color: 'page.text.200' })}>
                  {mind.role}
                </span>
              </li>
            ))}
          </ul>

          <div
            data-hero-rise
            className={css({
              isolation: 'isolate',
              maxW: '40rem',
              pos: 'relative',
            })}
          >
            <span
              aria-hidden
              className={cx(pool, css({ inset: '-40% -15%' }))}
            />
            <p className={cx(lead, css({ color: 'page.text.initial' }))}>
              Cerberus is the open-source ecosystem where designers prototype,
              developers ship production code, and agents work alongside both,
              all speaking the same language.
            </p>
          </div>

          <div
            data-hero-rise
            className={css({
              alignItems: 'stretch',
              display: 'flex',
              flexDir: 'column',
              gap: 'md',
              maxW: '44rem',
              sm: { alignItems: 'center', flexDir: 'row' },
            })}
          >
            <Link
              className={cx(
                button({ shape: 'sharp', size: 'lg' }),
                css({ flexShrink: 0, gap: 'sm' }),
              )}
              href="/docs/get-started/installation"
            >
              Get started
              <ArrowRight aria-hidden />
            </Link>
            <div className={css({ flex: '1', minW: '0' })}>
              <InstallLine command="npm install @cerberus-design/react" />
            </div>
          </div>
          <p
            data-hero-rise
            className={cx(fine, css({ color: 'page.text.initial' }))}
          >
            Are you an agent? Start at{' '}
            <a className={textLink} href="/llms.txt">
              /llms.txt
            </a>
            .
          </p>
        </div>
        <WorkflowStage />
      </div>

      <div
        className={cx(
          container,
          css({
            alignItems: 'center',
            borderTop: '1px solid',
            borderColor: 'page.border.initial',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'md',
            justifyContent: 'space-between',
            py: 'md',
          }),
        )}
      >
        <ul
          aria-label="Cerberus at a glance"
          className={cx(
            fine,
            css({
              color: 'page.text.initial',
              columnGap: 'lg',
              display: 'flex',
              flexWrap: 'wrap',
              rowGap: 'xs',
            }),
          )}
        >
          {FACTS.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        <a
          href="#problem"
          className={cx(
            fine,
            css({
              alignItems: 'center',
              color: 'page.text.initial',
              display: 'flex',
              gap: 'sm',
              rounded: 'xs',
              _focusVisible: { focusVisibleRing: 'outside' },
            }),
          )}
        >
          Scroll to see the workflow
          <span
            aria-hidden
            className={css({
              bgColor: 'page.text.initial',
              display: 'block',
              h: '4',
              w: '1px',
              _motionSafe: {
                animation:
                  'cueFlow 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite',
              },
            })}
          />
        </a>
      </div>
    </section>
  )
}
