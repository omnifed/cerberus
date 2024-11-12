import { css, cx } from '@cerberus/styled-system/css'
import Link from 'next/link'
import { button } from '@cerberus/styled-system/recipes'
import CerberusLogo from './cerberus-logo'
import { vstack } from '@cerberus-design/styled-system/patterns'
import { grid, gridItem } from '@cerberus/styled-system/patterns'
import { Tag } from '@cerberus-design/react'
import { HStack } from '@cerberus-design/styled-system/jsx'
import { CheckmarkFilled } from '@cerberus-design/icons'
import { HomeHeroText } from './home-hero-text'

export default function HomeHero() {
  return (
    <div
      className={grid({
        columns: 1,
        gap: 4,
        mt: '8rem',
        w: 'full',
        lg: {
          columns: 2,
          gap: '3xl',
          gridTemplateColumns: '1.7fr 1fr',
          pxi: '16',
        },
      })}
    >
      <main
        className={gridItem({
          bgColor: 'page.surface.100',
          mxi: '2',
          pxi: '6',
          py: 8,
          rounded: 'lg',
          zIndex: 'sticky',
          md: {
            pxi: '8',
            py: 8,
          },
        })}
      >
        <div
          className={vstack({
            alignItems: 'flex-start',
            gap: 4,
          })}
        >
          <HStack mt="3">
            <Tag gradient="thanatos-light" shape="square">
              <CheckmarkFilled />
              ARIA AA Compliant
            </Tag>
            <Tag gradient="amphiaraus-light" shape="square">
              Panda CSS
            </Tag>
          </HStack>

          <div
            className={css({
              mt: 4,
            })}
          >
            <h1
              className={css({
                color: 'page.text.100',
                maxW: '44ch',
                textStyle: 'display-sm',
                textWrap: 'pretty',
                lg: {
                  pb: 4,
                  textStyle: 'display-lg',
                },
              })}
            >
              Protect your brand <HomeHeroText />
            </h1>

            <p
              className={css({
                maxW: '44ch',
                textStyle: 'body-lg',
                lg: {
                  lineHeight: 'relaxed',
                  textStyle: 'body-xl',
                },
              })}
            >
              Create React 19+ design systems effortlessly.
            </p>
          </div>

          <div
            className={css({
              pt: 10,
              lg: {
                pt: 8,
              },
            })}
          >
            <Link
              className={cx(
                css({
                  lg: {
                    w: '13rem',
                  },
                }),
                button(),
              )}
              href="/preset/"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>

      <div
        className={gridItem({
          zIndex: 'sticky',
        })}
      >
        <span
          className={css({
            display: 'block',
            mt: 8,
            mx: 'auto',
            maxWidth: '25rem',
          })}
        >
          <CerberusLogo />
        </span>
      </div>
    </div>
  )
}
