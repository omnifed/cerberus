import CerberusLogo from '@/app/components/cerberus-logo'
import { CheckmarkFilled } from '@carbon/icons-react'
import { Tag, Text } from '@cerberus-design/react'
import Link from 'next/link'
import { css, cx } from 'styled-system/css'
import { HStack, Stack } from 'styled-system/jsx'
import { animateIn, grid, gridItem, vstack } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'
import { HomeHeroText } from './home-hero-text'

export function HomeHero() {
  return (
    <div
      className={grid({
        columns: 1,
        gap: 4,
        w: 'full',
        lg: {
          columns: 2,
          gap: '3xl',
          gridTemplateColumns: '1.7fr 1fr',
          pxi: '16',
        },
      })}
    >
      <div
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
                animationName: 'slideFromBottom, fadeIn',
                animationDuration: 'slowest',
                animationDelay: '400ms',
                animationFillMode: 'forwards',
                color: 'page.text.100',
                opacity: 0,
                textStyle: 'display-sm',
                textWrap: 'pretty',
                lg: {
                  pb: 4,
                  textStyle: 'display-lg',
                },
              })}
            >
              Cerberus <HomeHeroText />
            </h1>

            <Stack direction="column" gap="sm" w="full">
              <Text
                as="h2"
                animationName="slideFromBottom, fadeIn"
                animationDuration="slowest"
                animationDelay="600ms"
                animationFillMode="forwards"
                maxW="44ch"
                opacity="0"
                textStyle="heading-md"
              >
                Improving React development for humans and agents.
              </Text>

              <Text
                animationName="slideFromBottom, fadeIn"
                animationDuration="slowest"
                animationDelay="600ms"
                animationFillMode="forwards"
                maxW="60ch"
                opacity="0"
                textStyle="body-lg"
              >
                An infra-level UI platform to create cohesion and consistency so teams
                and agents can build faster, together.
              </Text>
            </Stack>
          </div>

          <div
            className={animateIn({
              delay: '1.2s',
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
              href="/docs/get-started/get-started"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div
        className={gridItem({
          zIndex: 'decorator',
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
