import { cerberus, Tabs } from '@cerberus-design/react'
import { css } from 'styled-system/css'
import { Code } from './code'

function formatJSRCmd(cmd: string): string {
  const isJSR = cmd.includes('jsr')
  const isDeno = cmd.includes('deno')

  if (isJSR) {
    const [pp, _, jsr, add, pkg] = cmd.split(' ')
    return `${pp} ${add} ${jsr}:${pkg}`
  }

  if (isDeno) {
    const [dno, add, pkg] = cmd.split(' ')
    console.log({
      cmd,
      dno,
      add,
      pkg,
    })
    return `${dno} ${add} npm:${pkg}`
  }

  return cmd
}

function formatDenoCmd(cmd: string): string {
  const isJSR = cmd.includes('jsr')

  if (isJSR) {
    const [dno, _, jsr, add, pkg] = cmd.split(' ')
    return `${dno} ${add} ${jsr}:${pkg}`
  }

  const [dno, add, pkg] = cmd.split(' ')
  let finalPkg = pkg
  if (pkg.includes('/react')) {
    finalPkg = `@cerberus-design/react`
  }
  console.log({
    cmd,
    dno,
    add,
    pkg,
    finalPkg,
  })
  return `${dno} ${add} npm:${finalPkg}`
}

interface BashTabsProps {
  code: string
}

export default function BashTabs(props: BashTabsProps) {
  return (
    <Tabs.Root defaultValue="pnpm">
      <Tabs.List
        className={css({
          borderColor: 'page.border.100',
        })}
      >
        <Tabs.Tab value="pnpm">PNPM</Tabs.Tab>
        <Tabs.Tab value="deno">Deno</Tabs.Tab>
        <Tabs.Tab value="bun">Bun</Tabs.Tab>
        <Tabs.Tab value="npm">NPM</Tabs.Tab>
      </Tabs.List>

      <cerberus.div mb="8" mt="md">
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

        <Tabs.Panel value="deno">
          <Code language="sh">
            {formatDenoCmd(
              props.code
                .replace('npm', 'deno')
                .replace('install', 'add')
                .replace('npx', 'deno dlx'),
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
      </cerberus.div>
    </Tabs.Root>
  )
}
