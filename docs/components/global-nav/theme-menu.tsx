'use client'

import { PalmTree, SailboatOffshore } from '@carbon/icons-react'
import {
  Button,
  For,
  Menu,
  Text,
  useThemeContext,
} from '@cerberus-design/react'
import { RawThemes } from '@cerberus/tokens'
import { useSyncExternalStore, type ElementType } from 'react'
import { type ThemeName } from 'styled-system/themes'
import { DogIcon } from '../icons/dog'
import { FireIcon } from '../icons/fire'

const supportedThemes: RawThemes[] = [
  'cerberus',
  'acheron',
  'elysium',
  'oceanus',
]

const icons: Record<RawThemes, ElementType> = {
  cerberus: DogIcon,
  acheron: FireIcon,
  elysium: PalmTree,
  oceanus: SailboatOffshore,
}

export function ThemeMenu() {
  const { theme, updateTheme } = useThemeContext()
  // The server can't read the theme cookie, so the first client render matches
  // the server's default and the real theme swaps in after hydration.
  const hydrated = useSyncExternalStore(noopSubscribe, isClient, isServer)
  const shownTheme: RawThemes = hydrated ? theme : 'cerberus'

  const handleUpdateTheme = async (details: { value: string }) => {
    const newTheme = details.value as ThemeName
    updateTheme(newTheme)
  }

  return (
    <Menu onSelect={handleUpdateTheme}>
      <Menu.Trigger asChild>
        <Button
          aria-label={`Theme: ${shownTheme}`}
          bgColor="page.bg.100"
          border="1px solid"
          borderColor="page.border.initial"
          color="page.text.initial"
          fontWeight={500}
          h="2.5rem"
          px="sm"
          rounded="sm"
          textStyle="label-sm"
          textTransform="capitalize"
          css={{
            '& [data-theme-label]': { display: 'none' },
          }}
          sm={{
            minW: '7.25rem',
            px: 'md',
            '& [data-theme-label]': { display: 'inline' },
          }}
          _hover={{
            bgColor: 'page.bg.200',
          }}
        >
          <MatchThemeContent theme={shownTheme} />
        </Button>
      </Menu.Trigger>

      <Menu.ContentGroup>
        <For each={supportedThemes}>
          {(theme) => (
            <Menu.Item key={theme} cursor="pointer" value={theme}>
              <MatchThemeContent theme={theme} />
            </Menu.Item>
          )}
        </For>
      </Menu.ContentGroup>
    </Menu>
  )
}

interface MatchThemeContentProps {
  theme: RawThemes
}

function MatchThemeContent({ theme }: MatchThemeContentProps) {
  const Icon = icons[theme]
  return (
    <>
      <Icon aria-hidden suppressHydrationWarning />
      <Text
        data-theme-label
        display="inline"
        ps="sm"
        textStyle="body-sm"
        textTransform="capitalize"
      >
        {theme}
      </Text>
    </>
  )
}

const noopSubscribe = () => () => {}
const isClient = () => true
const isServer = () => false
