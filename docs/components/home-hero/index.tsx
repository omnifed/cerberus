import { ArrowRight, CheckmarkFilled } from '@carbon/icons-react'
import { Tag } from '@cerberus-design/react'
import Link from 'next/link'
import { css, cx } from 'styled-system/css'
import { HStack } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'
import { HomeHeroText } from './home-hero-text'
import { TripShowcase } from './trip-showcase'

const intro = css({
  _motionSafe: {
    animationName: 'slideFromBottom, fadeIn',
    animationDuration: 'slowest',
    animationFillMode: 'backwards',
    animationTimingFunction: 'out',
  },
})

export function HomeHero() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr)',
        lg: {
          gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 3fr)',
          minH: 'calc(100dvh - var(--nav-height))',
        },
      })}
    >
      <div
        className={css({
          bgColor: 'page.bg.initial',
          display: 'flex',
          alignItems: 'center',
          px: 'md',
          py: 'xl',
          md: { px: 'xl', py: '3xl' },
          lg: {
            alignItems: 'flex-start',
            boxShadow: 'lg',
            px: '2xl',
            py: '0',
            zIndex: 'decorator',
          },
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: 'md',
            maxW: '33rem',
            md: { gap: 'lg' },
            lg: {
              justifyContent: 'center',
              minH: 'calc(100dvh - var(--nav-height))',
              pos: 'sticky',
              py: '2xl',
              top: 'var(--nav-height)',
            },
          })}
        >
          <div className={intro}>
            <HStack gap="md" flexWrap="wrap">
              <Tag palette="success" shape="square" usage="filled">
                <CheckmarkFilled aria-hidden />
                ARIA AA Compliant
              </Tag>
              <Tag palette="page" shape="square" usage="filled">
                Panda CSS
              </Tag>
            </HStack>
          </div>

          <div
            className={css({ display: 'flex', flexDir: 'column', gap: 'xs' })}
          >
            <h1
              className={cx(
                intro,
                css({
                  color: 'page.text.initial',
                  textStyle: 'display-sm',
                  textWrap: 'balance',
                  md: { textStyle: 'display-md' },
                }),
              )}
            >
              Cerberus <HomeHeroText />
            </h1>
            <p
              className={cx(
                intro,
                css({
                  color: 'page.text.initial',
                  textStyle: 'heading-2xs',
                  animationDelay: '80ms',
                }),
              )}
            >
              Improving React development for humans and agents.
            </p>
          </div>

          <p
            className={cx(
              intro,
              css({
                animationDelay: '160ms',
                color: 'page.text.200',
                maxW: '46ch',
                textStyle: 'body-lg',
                textWrap: 'pretty',
              }),
            )}
          >
            An infra-level UI platform to create cohesion and consistency so
            teams and agents can build faster, together.
          </p>

          <div className={cx(intro, css({ animationDelay: '240ms' }))}>
            <Link
              className={cx(
                button({ shape: 'sharp' }),
                css({ gap: 'sm', minW: '11rem' }),
              )}
              href="/docs/get-started/get-started"
            >
              Get Started
              <ArrowRight aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      <TripShowcase />
    </div>
  )
}
