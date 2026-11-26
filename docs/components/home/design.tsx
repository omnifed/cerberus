'use client'

import { ArrowRight, ChevronRight } from '@carbon/icons-react'
import { Button, DatePicker, Field, NumberInput } from '@cerberus-design/react'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { css, cx } from 'styled-system/css'
import { Beat, plateCaption, plateSurface } from './beat'
import { useExperience } from './experience'
import { InstallLine } from './install-line'
import { codeBlock } from './styles'

const PROMPT =
  'Prototype a booking form: a travel date, the party size and a confirm button.'

const FIGMA_CODE = `const api = figma(token, fileId, [localVarsMixin])
await api.getLocalVariables()`

/** The same names on both sides: what a designer sees, and what ships. */
const VARIABLES = [
  {
    figma: 'action / bg / initial',
    token: 'action.bg.initial',
    swatch: css({ bgColor: 'action.bg.initial' }),
  },
  {
    figma: 'page / text / initial',
    token: 'page.text.initial',
    swatch: css({ bgColor: 'page.text.initial' }),
  },
  {
    figma: 'danger / bg / initial',
    token: 'danger.bg.initial',
    swatch: css({ bgColor: 'danger.bg.initial' }),
  },
  {
    figma: 'success / bg / initial',
    token: 'success.bg.initial',
    swatch: css({ bgColor: 'success.bg.initial' }),
  },
]

/**
 * 02 · Design anywhere. Designers work where they already think, and what
 * they make is made of the same parts developers ship.
 */
export function Design() {
  return (
    <Beat
      id="design"
      pose="design"
      label="Design anywhere"
      heading="Prototype where you think. Hand off nothing."
      layout="stacked"
      plate={<DesignTools />}
    >
      <p>
        Sketch a flow by asking Claude, using the Cerberus design system, or
        pull your Figma variables into code with the Cerberus Figma package.
        Either way, the prototype is made of the same components and tokens that
        ship.
      </p>
      <p>
        There is no redline to read and no spec to rebuild from. A designer's
        prototype is already the start of production.
      </p>
    </Beat>
  )
}

const card = css({
  display: 'flex',
  flexDir: 'column',
  gap: 'md',
  minW: '0',
})

function DesignTools() {
  const { motion } = useExperience()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!motion || !el) return
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return
    const ctx = gsap.context(() => {
      const prompt = el.querySelector<HTMLElement>('[data-prompt]')
      const full = prompt?.textContent ?? ''
      const typed = { n: 0 }
      const tl = gsap
        .timeline({
          scrollTrigger: { trigger: el, start: 'top 72%', once: true },
          defaults: { ease: 'power3.out' },
        })
        .to(typed, {
          n: full.length,
          duration: 1.6,
          ease: 'none',
          onUpdate: () => {
            if (prompt) prompt.textContent = full.slice(0, Math.round(typed.n))
          },
          onComplete: () => {
            if (prompt) prompt.textContent = full
          },
        })
        .from(
          '[data-proto]',
          { opacity: 0, y: 14, stagger: 0.18, duration: 0.6 },
          '+=0.2',
        )
        .from(
          '[data-figma-line]',
          { opacity: 0, x: -8, stagger: 0.12, duration: 0.45 },
          '<0.2',
        )
      el.addEventListener(
        'focusin',
        () => {
          tl.progress(1)
          if (prompt) prompt.textContent = full
        },
        { once: true },
      )
      return () => {
        if (prompt) prompt.textContent = full
      }
    }, el)
    return () => ctx.revert()
  }, [motion])

  return (
    <div
      ref={ref}
      className={css({
        display: 'grid',
        gap: 'lg',
        gridTemplateColumns: 'minmax(0, 1fr)',
        lg: { gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)' },
      })}
    >
      <figure className={cx(plateSurface, card)}>
        <figcaption className={plateCaption}>
          In Claude, with the Cerberus design system
        </figcaption>
        <p
          className={css({
            alignItems: 'flex-start',
            bgColor: 'action.ghost.hover',
            color: 'page.text.initial',
            display: 'flex',
            gap: 'sm',
            minH: '3lh',
            px: 'md',
            py: 'sm',
            rounded: 'md',
            textStyle: 'body-sm',
          })}
        >
          <ChevronRight
            aria-hidden
            className={css({ flexShrink: 0, mt: '1' })}
          />
          <span data-prompt>{PROMPT}</span>
        </p>
        <div
          className={css({
            border: '1px dashed',
            borderColor: 'page.border.200',
            display: 'flex',
            flexDir: 'column',
            gap: 'md',
            p: 'md',
            rounded: 'md',
          })}
        >
          <p className={plateCaption}>
            The prototype: live Cerberus components
          </p>
          <div
            className={css({
              display: 'grid',
              gap: 'md',
              gridTemplateColumns: 'minmax(0, 1fr)',
              sm: { gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 2fr)' },
            })}
          >
            <div data-proto>
              <Field>
                <DatePicker name="design-travel-date">
                  <DatePicker.Label>Travel date</DatePicker.Label>
                  <DatePicker.InputGroup />
                  <DatePicker.Calendar />
                </DatePicker>
              </Field>
            </div>
            <div data-proto>
              <Field label="Party size">
                <NumberInput
                  name="design-party-size"
                  defaultValue="2"
                  max={9}
                  min={1}
                />
              </Field>
            </div>
          </div>
          <div data-proto>
            <Button shape="sharp">
              Confirm booking
              <Button.Icon>
                <ArrowRight />
              </Button.Icon>
            </Button>
          </div>
        </div>
        <p className={plateCaption}>
          An illustrative prompt. The prototype is real.
        </p>
      </figure>

      <figure className={cx(plateSurface, card)}>
        <figcaption className={plateCaption}>
          In Figma, with @cerberus/figma
        </figcaption>
        <ul
          aria-label="Figma variables and the Cerberus tokens they become"
          className={css({ display: 'flex', flexDir: 'column' })}
        >
          {VARIABLES.map((v) => (
            <li
              key={v.token}
              data-figma-line
              className={css({
                alignItems: 'center',
                borderBottom: '1px solid',
                borderColor: 'page.border.initial',
                columnGap: 'sm',
                display: 'grid',
                gridTemplateColumns: 'auto minmax(0, 1fr) auto minmax(0, 1fr)',
                py: 'sm',
                textStyle: 'label-sm',
              })}
            >
              <span
                aria-hidden
                className={cx(
                  v.swatch,
                  css({
                    border: '1px solid',
                    borderColor: 'page.border.200',
                    h: '5',
                    rounded: 'sm',
                    w: '5',
                  }),
                )}
              />
              <span className={css({ color: 'page.text.initial' })}>
                <span className={css({ srOnly: true })}>Figma variable </span>
                {v.figma}
              </span>
              <ArrowRight
                aria-hidden
                className={css({ color: 'page.text.100' })}
              />
              <code
                className={css({
                  color: 'page.text.initial',
                  fontFamily: 'mono',
                })}
              >
                <span className={css({ srOnly: true })}>
                  becomes the token{' '}
                </span>
                {v.token}
              </code>
            </li>
          ))}
        </ul>
        <p className={plateCaption}>
          The Cerberus tokens are generated from these Figma variables. The same
          package fetches yours through the Figma REST API.
        </p>
        <pre
          className={cx(
            codeBlock,
            css({ textStyle: 'label-sm', whiteSpace: 'pre-wrap' }),
          )}
        >
          <code>{FIGMA_CODE}</code>
        </pre>
        <InstallLine command="npx jsr add @cerberus/figma" />
      </figure>
    </div>
  )
}
