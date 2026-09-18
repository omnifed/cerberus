'use client'

import { getCodeString } from '@/lib/get-code-string'
import { HStack } from '@/styled-system/jsx'
import { Terminal } from '@carbon/icons-react'
import { cerberus, Show, Tabs } from '@cerberus-design/react'
import { css } from 'styled-system/css'
import { CopyButton } from './example/copy-button.client'

function formatJSRCmd(cmd: string): string {
  const isJSR = cmd.includes('jsr')
  const isDeno = cmd.includes('deno')

  if (isJSR) {
    const [pp, _, jsr, add, pkg] = cmd.split(' ')
    return `${pp} ${add} ${jsr}:${pkg}`
  }

  if (isDeno) {
    const [dno, add, pkg] = cmd.split(' ')
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
  return `${dno} ${add} npm:${finalPkg}`
}

interface BashTabsProps {
  code: string
}

export function BashTabs(props: BashTabsProps) {
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

// REPLACE EVENTUALLY

interface CodeProps {
  children: string
  language?: string
}

function Code(props: CodeProps) {
  return (
    <Show when={Boolean(props.children.length)}>
      <CodeBlock language={props.language} content={props.children} />
    </Show>
  )
}

interface CodeBlockProps {
  content: string
  language?: string
}

export async function CodeBlock(props: CodeBlockProps) {
  const out = await getCodeString(props.content)

  return (
    <cerberus.div my="md">
      <Show when={props.language === 'sh'}>
        <HStack justify="space-between" w="full">
          <HStack textStyle="body-sm">
            <span
              className={css({
                color: 'page.text.100',
              })}
            >
              <Terminal />
            </span>
            Terminal
          </HStack>
          <CopyButton content={props.content} />
        </HStack>
      </Show>

      <cerberus.div dangerouslySetInnerHTML={{ __html: out }} />
    </cerberus.div>
  )
}
