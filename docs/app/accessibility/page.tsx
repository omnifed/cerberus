import { SiteFooter } from '@/components/site-footer'
import { css } from '@/styled-system/css'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Accessibility',
  description:
    'How Cerberus meets Section 508 and WCAG Level AA, what that covers, and how to report an accessibility issue.',
}

function Section(props: PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section
      aria-labelledby={props.id}
      className={css({ display: 'flex', flexDir: 'column', gap: 'md' })}
    >
      <h2
        id={props.id}
        className={css({ color: 'page.text.initial', textStyle: 'heading-lg' })}
      >
        {props.title}
      </h2>
      <div
        className={css({
          color: 'page.text.200',
          display: 'flex',
          flexDir: 'column',
          gap: 'md',
          textStyle: 'body-lg',
        })}
      >
        {props.children}
      </div>
    </section>
  )
}

const list = css({
  display: 'flex',
  flexDir: 'column',
  gap: 'sm',
  listStyle: 'disc',
  pl: 'lg',
})
const link = css({
  color: 'action.navigation.initial',
  rounded: 'xs',
  textDecoration: 'underline',
  textUnderlineOffset: '0.2em',
  _hover: { color: 'action.navigation.hover' },
  _focusVisible: { focusVisibleRing: 'outside' },
})

export default function AccessibilityPage() {
  return (
    <>
      <article
        className={css({
          bgColor: 'page.bg.initial',
          display: 'flex',
          flexDir: 'column',
          gap: '2xl',
          mx: 'auto',
          maxW: '48rem',
          px: 'md',
          py: '4xl',
          md: { px: 'xl' },
        })}
      >
        <header
          className={css({ display: 'flex', flexDir: 'column', gap: 'md' })}
        >
          <h1
            className={css({
              color: 'page.text.initial',
              textStyle: 'display-sm',
              md: { textStyle: 'display-md' },
            })}
          >
            Accessibility
          </h1>
          <p
            className={css({
              color: 'page.text.200',
              textStyle: 'body-lg',
              textWrap: 'pretty',
            })}
          >
            Cerberus is used mainly to build software for the US military, where
            accessibility is a requirement, not a feature. This page explains
            the standards Cerberus meets, where that conformance comes from, and
            what stays your team’s responsibility.
          </p>
        </header>

        <Section id="standards" title="Standards">
          <p>
            Cerberus is Section 508 compliant. Section 508 of the Rehabilitation
            Act incorporates the Web Content Accessibility Guidelines (WCAG) 2.0
            Level AA by reference, and Cerberus components are built to meet
            WCAG Level AA.
          </p>
        </Section>

        <Section id="how" title="How Cerberus gets there">
          <ul className={list}>
            <li>
              Components are built on{' '}
              <a
                className={link}
                href="https://ark-ui.com"
                rel="noreferrer"
                target="_blank"
              >
                Ark UI
              </a>
              , whose primitives follow the WAI-ARIA Authoring Practices:
              correct roles and states, keyboard interaction and focus
              management come with every component.
            </li>
            <li>Every interactive component has a visible focus state.</li>
            <li>
              Colors come from semantic tokens, so text and controls keep their
              intended relationships in all four themes, in light and dark.
            </li>
            <li>Motion respects the visitor’s reduced-motion setting.</li>
          </ul>
        </Section>

        <Section id="your-part" title="What stays your responsibility">
          <p>
            Accessible components don’t make an accessible product on their own.
            Conformance also depends on how they’re used:
          </p>
          <ul className={list}>
            <li>
              Give every field a label and every icon-only button an accessible
              name.
            </li>
            <li>Write clear content, headings and error messages.</li>
            <li>
              Stay on semantic tokens; custom colors need their own contrast
              checks.
            </li>
            <li>Test complete flows with a keyboard and a screen reader.</li>
          </ul>
        </Section>

        <Section id="this-site" title="This site">
          <p>
            This documentation site aims for the same standard. The live demo on
            the home page can be paused at any time, and it doesn’t play when
            your system asks for reduced motion.
          </p>
        </Section>

        <Section id="report" title="Report an issue">
          <p>
            Found a barrier in a component or on this site?{' '}
            <a
              className={link}
              href="https://github.com/omnifed/cerberus/issues/new"
              rel="noreferrer"
              target="_blank"
            >
              Open an issue on GitHub
            </a>{' '}
            and describe the component, what you expected, and the assistive
            technology you used.
          </p>
        </Section>
      </article>
      <SiteFooter />
    </>
  )
}
