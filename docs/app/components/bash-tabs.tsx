import { Tabs } from '@cerberus-design/react'
import { css } from 'styled-system/css'
import { Code } from './code'

interface BashTabsProps {
  code: string
}

export default function BashTabs(props: BashTabsProps) {
  return (
    <Tabs.Root defaultValue="npm">
      <Tabs.List
        className={css({
          borderColor: 'page.border.100',
        })}
      >
        <Tabs.Tab value="npm">NPM</Tabs.Tab>
        <Tabs.Tab value="pnpm">PNPM</Tabs.Tab>
        <Tabs.Tab value="yarn">Yarn</Tabs.Tab>
      </Tabs.List>

      <div
        className={css({
          mb: 8,
          mt: 4,
        })}
      >
        <Tabs.Panel value="npm">
          <Code language="sh">{props.code}</Code>
        </Tabs.Panel>
        <Tabs.Panel value="pnpm">
          <Code language="sh">
            {props.code
              .replace('npm', 'pnpm')
              .replace('install', 'add')
              .replace('npx', 'pnpm dlx')}
          </Code>
        </Tabs.Panel>
        <Tabs.Panel value="yarn">
          <Code language="sh">
            {props.code.replace('npm', 'yarn').replace('install', 'add')}
          </Code>
        </Tabs.Panel>
      </div>
    </Tabs.Root>
  )
}
