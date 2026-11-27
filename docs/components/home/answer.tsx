'use client'

import { ArrowRight } from '@carbon/icons-react'
import { Button, Tag } from '@cerberus-design/react'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { css, cx } from 'styled-system/css'
import { pool } from './beat'
import { useExperience } from './experience'
import { RevealHeading } from './reveal-heading'
import { container, displayStatement, lead } from './styles'

const ROLES = [
  {
    name: 'Designer',
    where: 'in Figma',
    dot: css({ bgColor: 'dataViz.qualitative.100' }),
  },
  {
    name: 'Developer',
    where: 'in code',
    dot: css({ bgColor: 'dataViz.qualitative.300' }),
  },
  {
    name: 'Agent',
    where: 'in a prompt',
    dot: css({ bgColor: 'dataViz.qualitative.500' }),
  },
]

/** Three names for each thing, one per role, and the one token they become. */
const ROWS = [
  {
    thing: 'The main action color',
    names: ['Brand / Purple 600', '#5f00b5', 'the purple one'],
    token: 'action.bg.initial',
    swatch: css({ bgColor: 'action.bg.initial' }),
  },
  {
    thing: 'Body text',
    names: ['Body / Default', 'text-gray-900', 'dark text'],
    token: 'page.text.initial',
    swatch: css({ bgColor: 'page.text.initial' }),
  },
  {
    thing: 'Errors',
    names: ['Error red', '--red-500', 'make it red'],
    token: 'danger.bg.initial',
    swatch: css({ bgColor: 'danger.bg.initial' }),
  },
]

const GLYPHS = 'abcdefghijklmnopqrstuvwxyz0123456789.#/-_'

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

/**
 * One frame of a name turning into a token: the old name erodes from the
 * left, noise runs ahead of the new one, and the token settles behind it.
 */
function scramble(from: string, to: string, t: number) {
  if (t <= 0) return from
  if (t >= 1) return to
  const len = Math.round(from.length + (to.length - from.length) * t)
  let out = ''
  for (let i = 0; i < len; i++) {
    const k = i / Math.max(1, len)
    if (k < t * 1.4 - 0.4) out += to[i] ?? ''
    else if (k < t * 1.4)
      out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
    else out += from[i] ?? GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
  }
  return out
}

const rowGrid = css({
  columnGap: 'sm',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  pos: 'relative',
  md: { columnGap: 'lg' },
})

/**
 * 03 · The answer. Ask a designer, a developer and an agent what to call one
 * color and you get three answers. As you scroll, all three scramble into the
 * same Cerberus token, then the claim arrives with live components painted by
 * those tokens. Without motion, the names have already resolved.
 */
export function Answer() {
  const { motion } = useExperience()
  const pinRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = pinRef.current
    if (!motion || !root) return
    const rows = [...root.querySelectorAll<HTMLElement>('[data-row]')]
    const dividers = [...root.querySelectorAll<HTMLElement>('[data-divider]')]
    const settled = root.querySelector<HTMLElement>('[data-settled]')
    const cells = rows.map((row) =>
      [...row.querySelectorAll<HTMLElement>('[data-cell]')].map((el) => ({
        el,
        from: el.dataset.from ?? '',
        to: el.dataset.to ?? '',
        swatch: el.parentElement?.querySelector<HTMLElement>('[data-swatch]'),
      })),
    )
    const seams = rows.map((row) =>
      row.querySelector<HTMLElement>('[data-seam]'),
    )

    // Write into the existing text node, so React's node stays in place.
    const write = (el: HTMLElement, text: string) => {
      if (el.firstChild) el.firstChild.nodeValue = text
    }

    const render = (p: number) => {
      cells.forEach((row, r) => {
        const start = 0.06 + r * 0.17
        row.forEach((cell, c) => {
          const t = clamp01((p - start - c * 0.06) / 0.4)
          write(cell.el, scramble(cell.from, cell.to, t))
          if (cell.swatch) {
            const s = clamp01((t - 0.8) / 0.2)
            cell.swatch.style.opacity = String(s)
            cell.swatch.style.transform = `scale(${0.4 + 0.6 * s})`
          }
        })
        const seam = seams[r]
        if (seam)
          seam.style.transform = `scaleX(${clamp01((p - start - 0.3) / 0.3)})`
      })
      const apart = 1 - clamp01((p - 0.72) / 0.18)
      dividers.forEach((d) => (d.style.opacity = String(apart)))
      if (settled) settled.style.opacity = String(clamp01((p - 0.86) / 0.12))
    }

    const reset = () => {
      cells.flat().forEach((cell) => {
        write(cell.el, cell.to)
        if (cell.swatch) {
          cell.swatch.style.opacity = ''
          cell.swatch.style.transform = ''
        }
      })
      seams.forEach((s) => s && (s.style.transform = ''))
      dividers.forEach((d) => (d.style.opacity = ''))
      if (settled) settled.style.opacity = ''
    }

    const mm = gsap.matchMedia()
    mm.add(
      { pinned: '(min-width: 64rem) and (min-height: 40rem)' },
      (context) => {
        const pinned = context.conditions?.pinned
        // Loaded below it: it has already resolved.
        if (!pinned && root.getBoundingClientRect().bottom < 0) return
        const proxy = { p: 0 }
        gsap.to(proxy, {
          p: 1,
          ease: 'none',
          onUpdate: () => render(proxy.p),
          scrollTrigger: pinned
            ? {
                trigger: root,
                start: 'center center',
                end: '+=110%',
                pin: true,
                scrub: 0.5,
                anticipatePin: 1,
              }
            : {
                trigger: root,
                start: 'top 80%',
                end: 'bottom 35%',
                scrub: 0.5,
              },
        })
        render(proxy.p)
        return reset
      },
    )
    return () => {
      mm.revert()
      reset()
    }
  }, [motion])

  return (
    <section
      aria-labelledby="answer-heading"
      data-pose="answer"
      className={css({ py: '4xl', md: { py: '32' } })}
    >
      <div className={container}>
        <div
          ref={pinRef}
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: 'lg',
            mx: 'auto',
            maxW: '62rem',
            w: 'full',
          })}
        >
          <div className={css({ isolation: 'isolate', pos: 'relative' })}>
            <span
              aria-hidden
              className={cx(pool, css({ inset: '-60% -8%' }))}
            />
            <p
              className={css({
                color: 'page.text.initial',
                fontSize: 'clamp(1.25rem, 0.9rem + 1vw, 1.875rem)',
                fontWeight: 'semibold',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
                textWrap: 'balance',
              })}
            >
              Ask three people what to call one color. You get three answers.
            </p>
          </div>

          {/* A table ignores the 1px width, so its wrapper is the sr-only box. */}
          <div className={css({ srOnly: true })}>
            <table>
              <caption>
                What each role calls the same three things, and the one Cerberus
                token they all share
              </caption>
              <thead>
                <tr>
                  <th scope="col">Thing</th>
                  {ROLES.map((role) => (
                    <th key={role.name} scope="col">
                      {role.name}
                    </th>
                  ))}
                  <th scope="col">Cerberus token</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.token}>
                    <th scope="row">{row.thing}</th>
                    {row.names.map((name) => (
                      <td key={name}>{name}</td>
                    ))}
                    <td>{row.token}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* The picture of it. The table above says the same thing in words. */}
          <div
            aria-hidden
            className={css({
              bgColor: 'page.surface.100',
              border: '1px solid',
              borderColor: 'page.border.initial',
              boxShadow: '2xl',
              p: 'md',
              rounded: 'xl',
              md: { p: 'xl' },
            })}
          >
            <div
              className={cx(
                rowGrid,
                css({
                  borderBottom: '1px solid',
                  borderColor: 'page.border.initial',
                  pb: 'md',
                }),
              )}
            >
              {ROLES.map((role) => (
                <p
                  key={role.name}
                  className={css({
                    alignItems: 'center',
                    columnGap: 'sm',
                    display: 'flex',
                    flexWrap: 'wrap',
                    textStyle: 'label-sm',
                  })}
                >
                  <span
                    className={cx(
                      role.dot,
                      css({ flexShrink: 0, h: '2', rounded: 'full', w: '2' }),
                    )}
                  />
                  <span
                    className={css({
                      color: 'page.text.initial',
                      fontWeight: 600,
                    })}
                  >
                    {role.name}
                  </span>
                  <span className={css({ color: 'page.text.100' })}>
                    {role.where}
                  </span>
                </p>
              ))}
            </div>

            {ROWS.map((row) => (
              <div
                key={row.token}
                data-row
                className={cx(
                  rowGrid,
                  css({
                    borderBottom: '1px solid',
                    borderColor: 'page.border.initial',
                    py: 'lg',
                    md: { py: 'xl' },
                  }),
                )}
              >
                {/* The row coming together: one line through all three. */}
                <span
                  data-seam
                  className={css({
                    bgGradient: 'to-r',
                    bottom: '-1px',
                    gradientFrom: 'dataViz.qualitative.100',
                    gradientTo: 'dataViz.qualitative.500',
                    gradientVia: 'dataViz.qualitative.300',
                    h: '2px',
                    insetInline: '0',
                    pos: 'absolute',
                    transformOrigin: 'left',
                  })}
                />
                {row.names.map((name, c) => (
                  <p
                    key={name}
                    className={css({
                      alignItems: 'center',
                      display: 'flex',
                      gap: 'sm',
                      minW: '0',
                      pos: 'relative',
                    })}
                  >
                    {c > 0 && (
                      <span
                        data-divider
                        className={css({
                          bgColor: 'page.border.200',
                          bottom: '-15%',
                          left: '-0.25rem',
                          opacity: 0,
                          pos: 'absolute',
                          top: '-15%',
                          w: '1px',
                          md: { left: '-0.75rem' },
                        })}
                      />
                    )}
                    <span
                      data-swatch
                      className={cx(
                        row.swatch,
                        css({
                          border: '1px solid',
                          borderColor: 'page.border.200',
                          flexShrink: 0,
                          h: '4',
                          rounded: 'sm',
                          w: '4',
                          md: { h: '5', w: '5' },
                        }),
                      )}
                    />
                    <code
                      data-cell
                      data-from={name}
                      data-to={row.token}
                      className={css({
                        color: 'page.text.initial',
                        fontFamily: 'mono',
                        fontSize: 'clamp(0.75rem, 0.55rem + 0.6vw, 1.125rem)',
                        fontVariantNumeric: 'tabular-nums',
                        minW: '0',
                        overflowWrap: 'anywhere',
                      })}
                    >
                      {row.token}
                    </code>
                  </p>
                ))}
              </div>
            ))}

            <p
              data-settled
              className={css({
                color: 'page.text.200',
                pt: 'md',
                textStyle: 'label-sm',
              })}
            >
              One name in the Figma library, the code and llms.txt. Nobody has
              to translate.
            </p>
          </div>
        </div>

        <div
          className={css({
            alignItems: 'center',
            display: 'flex',
            flexDir: 'column',
            gap: 'xl',
            pt: '4xl',
            textAlign: 'center',
          })}
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
          <figure
            className={css({
              alignItems: 'center',
              display: 'flex',
              flexDir: 'column',
              gap: 'sm',
            })}
          >
            <div
              className={css({
                alignItems: 'center',
                bgColor: 'page.surface.100',
                border: '1px solid',
                borderColor: 'page.border.initial',
                boxShadow: '2xl',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'md',
                justifyContent: 'center',
                px: 'lg',
                py: 'md',
                rounded: 'xl',
              })}
            >
              <span
                className={css({
                  color: 'page.text.initial',
                  textStyle: 'body-sm',
                })}
              >
                Travelers: 2
              </span>
              <Tag palette="danger" shape="pill" usage="filled">
                Card declined
              </Tag>
              <Button shape="sharp" size="sm">
                Confirm booking
                <Button.Icon>
                  <ArrowRight />
                </Button.Icon>
              </Button>
            </div>
            <figcaption
              className={css({ color: 'page.text.100', textStyle: 'label-sm' })}
            >
              Live Cerberus components, painted by those same three tokens.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
