'use client'

import { getTheme, injectTheme, type ThemeName } from 'styled-system/themes'
import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Show,
  Text,
  useThemeContext,
} from '@cerberus-design/react'
import { DogIcon } from '../icons/DogIcon'
import { FireIcon } from '../icons/FireIcon'
import { getCodeTheme } from '@/app/utils/colors'
import { PalmTree } from '@carbon/icons-react'

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
        <MenuItem cursor="pointer" value="cerberus">
          <MatchThemeContent theme="cerberus" />
        </MenuItem>

        <MenuItem cursor="pointer" value="acheron">
          <MatchThemeContent theme="acheron" />
        </MenuItem>

        <MenuItem cursor="pointer" value="elysium">
          <MatchThemeContent theme="elysium" />
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
    </>
  )
}
