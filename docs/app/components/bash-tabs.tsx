import { Tabs } from '@cerberus-design/react'
import { css } from 'styled-system/css'
import { Code } from './code'

function formatJSRCmd(cmd: string): string {
  const isJSR = cmd.includes('jsr')

  if (isJSR) {
    const [pp, _, jsr, add, pkg] = cmd.split(' ')
    return `${pp} ${add} ${jsr}:${pkg}`
  }

  return cmd
}

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
        <Tabs.Tab value="bun">Bun</Tabs.Tab>
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
            {formatJSRCmd(
              props.code
                .replace('npm', 'pnpm')
                .replace('install', 'add')
                .replace('npx', 'pnpm dlx'),
            )}
          </Code>
        </Tabs.Panel>
        <Tabs.Panel value="bun">
          <Code language="sh">
            {props.code
              .replace('npm', 'bun')
              .replace('install', 'add')
              .replace('npx', 'bunx')}
          </Code>
        </Tabs.Panel>
      </div>
    </Tabs.Root>
  )
}
