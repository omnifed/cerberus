import { Tabs, TabList, Tab, TabPanel } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { Code } from './code'

interface BashTabsProps {
  code: string
}

export default function BashTabs(props: BashTabsProps) {
  return (
    <Tabs active="npm" cache id="bash-tabs">
      <TabList
        className={css({
          borderColor: 'page.border.100',
        })}
        description="Bash commands"
      >
        <Tab value="npm">NPM</Tab>
        <Tab value="pnpm">PNPM</Tab>
        <Tab value="yarn">Yarn</Tab>
      </TabList>

      <div
        className={css({
          mb: 8,
          mt: 4,
        })}
      >
        <TabPanel tab="npm">
          <Code language="sh">{props.code}</Code>
        </TabPanel>
        <TabPanel tab="pnpm">
          <Code language="sh">
            {props.code
              .replace('npm', 'pnpm')
              .replace('install', 'add')
              .replace('npx', 'pnpm dlx')}
          </Code>
        </TabPanel>
        <TabPanel tab="yarn">
          <Code language="sh">
            {props.code.replace('npm', 'yarn').replace('install', 'add')}
          </Code>
        </TabPanel>
      </div>
    </Tabs>
  )
}
