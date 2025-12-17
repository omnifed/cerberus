'use client'

import { getTheme, injectTheme, type ThemeName } from 'styled-system/themes'
import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Show,
  useThemeContext,
} from '@cerberus-design/react'
import { DogIcon } from '../icons/DogIcon'
import { FireIcon } from '../icons/FireIcon'
import { getCodeTheme } from '@/app/utils/colors'

export function ThemeMenu() {
  const { mode, theme, updateTheme } = useThemeContext()

  const handleUpdateTheme = async (details: { value: string }) => {
    const newTheme = details.value as ThemeName
    const pandaTheme = await getTheme(newTheme)
    injectTheme(document.documentElement, pandaTheme)
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
        <MenuItem value="cerberus">
          <MatchThemeContent theme="cerberus" />
        </MenuItem>

        <MenuItem value="acheron">
          <MatchThemeContent theme="acheron" />
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}

interface MatchThemeContentProps {
  theme: ThemeName
}

function MatchThemeContent({ theme }: MatchThemeContentProps) {
  return (
    <>
      <Show when={theme === 'cerberus'}>
        {() => (
          <>
            <DogIcon />
            Cerberus
          </>
        )}
      </Show>

      <Show when={theme === 'acheron'}>
        {() => (
          <>
            <FireIcon />
            Acheron
          </>
        )}
      </Show>
    </>
  )
}
