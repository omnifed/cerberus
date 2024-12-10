import { Tabs, Tab, TabPanel, TabsList } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { Code } from './code'

interface BashTabsProps {
  code: string
}

export default function BashTabs(props: BashTabsProps) {
  return (
    <Tabs cache defaultValue="npm">
      <TabsList
        className={css({
          borderColor: 'page.border.100',
        })}
      >
        <Tab value="npm">NPM</Tab>
        <Tab value="pnpm">PNPM</Tab>
        <Tab value="yarn">Yarn</Tab>
      </TabsList>

      <div
        className={css({
          mb: 8,
          mt: 4,
        })}
      >
        <TabPanel value="npm">
          <Code language="sh">{props.code}</Code>
        </TabPanel>
        <TabPanel value="pnpm">
          <Code language="sh">
            {props.code
              .replace('npm', 'pnpm')
              .replace('install', 'add')
              .replace('npx', 'pnpm dlx')}
          </Code>
        </TabPanel>
        <TabPanel value="yarn">
          <Code language="sh">
            {props.code.replace('npm', 'yarn').replace('install', 'add')}
          </Code>
        </TabPanel>
      </div>
    </Tabs>
  )
}
