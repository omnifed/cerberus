'use client'

import { Add, ArrowUp, ChevronDown, SettingsAdjust } from '@carbon/icons-react'
import { gsap } from 'gsap'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { useExperience } from './experience'

/**
 * A prompt as people actually send one: Claude's composer, then the message
 * it becomes. Everything here is an illustration of a Claude session, so the
 * whole thing is labelled as one wherever it is used.
 */

const MODEL = 'Opus 5.5'

const iconButton = css({
  alignItems: 'center',
  border: '1px solid',
  borderColor: 'page.border.initial',
  color: 'page.text.200',
  display: 'inline-flex',
  h: '7',
  justifyContent: 'center',
  rounded: 'md',
  w: '7',
})

interface ComposerProps {
  /** The text in the box. Empty shows the placeholder. */
  value: string
  placeholder?: string
  /** Shows a blinking caret after the text, while someone is typing. */
  typing?: boolean
  /** Lights the send button, as if it is being pressed. */
  sending?: boolean
  className?: string
}

/** Claude's message box: the text, then a row of tools, the model and send. */
export function ClaudeComposer(props: ComposerProps) {
  const empty = props.value.length === 0
  return (
    <div
      className={cx(
        css({
          bgColor: 'page.surface.initial',
          border: '1px solid',
          borderColor: 'page.border.initial',
          boxShadow: 'sm',
          display: 'flex',
          flexDir: 'column',
          gap: 'sm',
          pb: 'sm',
          pt: 'md',
          px: 'md',
          rounded: '2xl',
        }),
        props.className,
      )}
    >
      <p
        className={css({
          color: empty ? 'page.text.100' : 'page.text.initial',
          minH: '2lh',
          textStyle: 'body-sm',
          textWrap: 'pretty',
        })}
      >
        {empty ? (props.placeholder ?? 'Reply to Claude…') : props.value}
        {props.typing && (
          <span
            aria-hidden
            className={css({
              bgColor: 'page.text.initial',
              display: 'inline-block',
              h: '1em',
              ml: '0.5',
              verticalAlign: 'text-bottom',
              w: '1px',
              _motionSafe: { animation: 'caretBlink 1s steps(1) infinite' },
            })}
          />
        )}
      </p>
      <div
        aria-hidden
        className={css({
          alignItems: 'center',
          display: 'flex',
          gap: 'xs',
        })}
      >
        <span className={iconButton}>
          <Add size={16} />
        </span>
        <span className={iconButton}>
          <SettingsAdjust size={14} />
        </span>
        <span
          className={css({
            alignItems: 'center',
            color: 'page.text.200',
            display: 'inline-flex',
            gap: '1',
            ml: 'auto',
            mr: 'xs',
            textStyle: 'label-sm',
          })}
        >
          {MODEL}
          <ChevronDown size={12} />
        </span>
        <span
          data-sending={props.sending ?? false}
          className={css({
            alignItems: 'center',
            bgColor: 'action.bg.initial',
            color: 'action.text.initial',
            display: 'inline-flex',
            h: '8',
            justifyContent: 'center',
            opacity: empty ? 0.4 : 1,
            rounded: 'lg',
            transitionDuration: 'fast',
            transitionProperty: 'opacity, transform, background-color',
            w: '8',
            '&[data-sending=true]': {
              bgColor: 'action.bg.active',
              transform: 'scale(0.9)',
            },
          })}
        >
          <ArrowUp size={16} />
        </span>
      </div>
    </div>
  )
}

/** A sent message, as it sits in the conversation. */
export function ClaudeUserMessage(props: { children: ReactNode }) {
  return (
    <div className={css({ display: 'flex', justifyContent: 'flex-end' })}>
      <p
        className={css({
          bgColor: 'page.surface.200',
          color: 'page.text.initial',
          maxW: '88%',
          px: 'md',
          py: 'sm',
          rounded: 'xl',
          textStyle: 'body-sm',
          textWrap: 'pretty',
        })}
      >
        {props.children}
      </p>
    </div>
  )
}

/** The name line above Claude's reply. */
export function ClaudeByline(props: { children?: ReactNode }) {
  return (
    <p
      className={css({
        alignItems: 'center',
        color: 'page.text.200',
        display: 'flex',
        gap: 'sm',
        textStyle: 'label-sm',
      })}
    >
      <span
        aria-hidden
        className={css({
          bgColor: 'action.bg.initial',
          display: 'inline-block',
          h: '2',
          rounded: 'full',
          w: '2',
        })}
      />
      <span className={css({ color: 'page.text.initial', fontWeight: 600 })}>
        Claude
      </span>
      {props.children}
    </p>
  )
}

type Phase = 'idle' | 'typing' | 'sending' | 'sent'

interface SessionProps {
  /** What the person sends. */
  prompt: string
  /**
   * Claude's reply. Mark each piece that should arrive in turn with
   * `data-step`; they appear one after another once the prompt is sent.
   */
  children: ReactNode
  /** Starts when this much of the session is on screen. */
  start?: string
  /** Called once the reply has fully arrived. */
  onDone?: () => void
  className?: string
}

/**
 * A whole exchange: the prompt is typed into the composer and sent, becomes a
 * message, and Claude's reply arrives a step at a time. It plays once, when it
 * scrolls into view. Without motion, on the server and before hydration, the
 * sent conversation is simply there.
 */
export function ClaudeSession(props: SessionProps) {
  const { motion } = useExperience()
  const ref = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<Phase>('sent')
  const [typed, setTyped] = useState('')
  const onDone = useRef(props.onDone)
  useEffect(() => {
    onDone.current = props.onDone
  })

  useEffect(() => {
    const el = ref.current
    if (!motion || !el) return
    // Never replay what someone is already reading.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.8) return

    setPhase('idle')
    setTyped('')
    const text = props.prompt
    const ctx = gsap.context(() => {
      const steps = el.querySelectorAll('[data-step]')
      gsap.set(steps, { opacity: 0, y: 8 })
      const count = { n: 0 }
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.out' },
      })
      tl.call(() => setPhase('typing'))
        .to(count, {
          n: text.length,
          duration: Math.min(2.4, 0.028 * text.length),
          ease: 'none',
          onUpdate: () => setTyped(text.slice(0, Math.round(count.n))),
        })
        .call(() => setPhase('sending'), undefined, '+=0.35')
        .call(() => setPhase('sent'), undefined, '+=0.25')
        .to(steps, { opacity: 1, y: 0, duration: 0.5, stagger: 0.38 }, '+=0.3')
        .call(() => onDone.current?.())

      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: props.start ?? 'top 75%',
          once: true,
          onEnter: () => tl.play(),
        },
      })
      // Focus arriving early finishes the exchange at once.
      el.addEventListener(
        'focusin',
        () => {
          tl.progress(1)
          setPhase('sent')
        },
        { once: true },
      )
    }, el)
    return () => {
      ctx.revert()
      setPhase('sent')
    }
  }, [motion, props.prompt, props.start])

  const sent = phase === 'sent'
  return (
    <div
      ref={ref}
      className={cx(
        css({ display: 'flex', flexDir: 'column', gap: 'md' }),
        props.className,
      )}
    >
      {/* The conversation. Screen readers get it in full from the start. */}
      <div className={css({ display: 'flex', flexDir: 'column', gap: 'md' })}>
        <div
          data-shown={sent}
          className={css({
            transitionDuration: 'normal',
            transitionProperty: 'opacity, transform',
            '&[data-shown=false]': {
              opacity: 0,
              transform: 'translateY(8px)',
            },
          })}
        >
          <ClaudeUserMessage>{props.prompt}</ClaudeUserMessage>
        </div>
        <div className={css({ display: 'flex', flexDir: 'column', gap: 'sm' })}>
          {props.children}
        </div>
      </div>
      <div aria-hidden>
        <ClaudeComposer
          value={sent ? '' : typed}
          typing={phase === 'typing'}
          sending={phase === 'sending'}
        />
      </div>
    </div>
  )
}
