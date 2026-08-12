'use client'

import { getCodeTheme } from '@/app/utils/colors'
import { PalmTree, SailboatOffshore } from '@carbon/icons-react'
import {
  Button,
  For,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Show,
  Text,
  useThemeContext,
} from '@cerberus-design/react'
import { type ThemeName } from 'styled-system/themes'
import { DogIcon } from '../icons/DogIcon'
import { FireIcon } from '../icons/FireIcon'
import { RawThemes } from '@cerberus/tokens'

const supportedThemes: RawThemes[] = [
  'cerberus',
  'acheron',
  // 'elysium',
  // 'oceanus',
]

export function ThemeMenu() {
  const { mode, theme, updateTheme } = useThemeContext()

  const handleUpdateTheme = async (details: { value: string }) => {
    const newTheme = details.value as ThemeName
    updateTheme(newTheme)
    document.documentElement.dataset.codeTheme = getCodeTheme(mode, newTheme)
  }

  return (
    <Menu onSelect={handleUpdateTheme}>
      <MenuTrigger>
        <Button
          bgColor="page.bg.100"
          border="1px solid"
          borderColor="page.border.initial"
          color="page.text.initial"
          fontWeight={500}
          h="2.275rem"
          rounded="sm"
          textStyle="label-sm"
          textTransform="capitalize"
          _hover={{
            bgColor: 'page.bg.200',
          }}
        >
          <MatchThemeContent theme={theme} />
        </Button>
      </MenuTrigger>

      <MenuContent>
        <For each={supportedThemes}>
          {(theme) => (
            <MenuItem key={theme} cursor="pointer" value={theme}>
              <MatchThemeContent theme={theme} />
            </MenuItem>
          )}
        </For>
      </MenuContent>
    </Menu>
  )
}

interface MatchThemeContentProps {
  theme: RawThemes
}

function MatchThemeContent({ theme }: MatchThemeContentProps) {
  return (
    <>
      <Show when={theme === 'cerberus'}>
        {() => (
          <>
            <DogIcon />
            <Text display="inline" ps="sm" textStyle="body-sm">
              Cerberus
            </Text>
          </>
        )}
      </Show>

      <Show when={theme === 'acheron'}>
        {() => (
          <>
            <FireIcon />
            <Text display="inline" ps="sm" textStyle="body-sm">
              Acheron
            </Text>
          </>
        )}
      </Show>

      <Show when={theme === 'elysium'}>
        {() => (
          <>
            <PalmTree />
            <Text display="inline" ps="sm" textStyle="body-sm">
              Elysium
            </Text>
          </>
        )}
      </Show>

      <Show when={theme === 'oceanus'}>
        {() => (
          <>
            <SailboatOffshore />
            <Text display="inline" ps="sm" textStyle="body-sm">
              Oceanus
            </Text>
          </>
        )}
      </Show>
    </>
  )
}
