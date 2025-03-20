import { Tag } from '@cerberus/solid'
import { A } from '@solidjs/router'
import { Index } from 'solid-js'
import { Box, HStack } from 'styled-system/jsx'
import { hstack } from 'styled-system/patterns'
import CerberusLogo from '~/components/ui/cerberus-logo'
import navData from '~/data/global-nav.json'

export function GlobalNav() {
  return (
    <nav>
      <HStack
        bgColor="page.surface.100"
        borderBottom="1px solid"
        borderBottomColor="page.border.initial"
        backdropBlur="2px"
        h="3.5rem"
        justify="space-between"
        px="md"
        w="full"
      >
        <HStack>
          <A href="/">
            <HStack marginInlineEnd="8">
              <Box w="3rem">
                <CerberusLogo />
              </Box>
              <p>Cerberus</p>
            </HStack>
          </A>

          <Index each={navData}>
            {(navItem) => (
              <A
                class={hstack({
                  h: 'full',
                  px: 'md',
                  textTransform: 'capitalize',
                  transitionProperty: 'color',
                  transitionDuration: 'fast',
                  _hover: {
                    color: 'action.navigation.hover',
                  },
                  _currentPage: {
                    color: 'action.navigation.active  ',
                  },
                })}
                href={navItem().href}
                end
              >
                {navItem().label}
              </A>
            )}
          </Index>
        </HStack>

        <Tag palette="page" shape="pill">
          v0.18
        </Tag>
      </HStack>
    </nav>
  )
}
