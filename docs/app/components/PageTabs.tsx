import {
  AccessibilityAlt,
  GroupObjectsSave,
  IbmWatsonxCodeAssistantForZRefactor,
  InformationFilled,
} from '@carbon/icons-react'
import { Tabs } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { cx } from '@cerberus/styled-system/css'
import type { ReactNode } from 'react'

interface TabProps {
  description: string
  overview: ReactNode
  guidelines: ReactNode
  dev: ReactNode
  a11y: ReactNode
}

export default function PageTabs(props: TabProps) {
  return (
    <Tabs.Root defaultValue="overview">
      <Tabs.List className={css(tabListStyles)}>
        <Tabs.Tab
          className={cx(css(tabOverrideStyles), css(smallTabStyles))}
          value="overview"
        >
          <InformationFilled size={20} />
          Overview
        </Tabs.Tab>
        <Tabs.Tab
          className={cx(css(tabOverrideStyles), css(smallTabStyles))}
          value="guidelines"
        >
          <GroupObjectsSave size={20} />
          Guidelines
        </Tabs.Tab>
        <Tabs.Tab
          className={cx(css(tabOverrideStyles), css(smallTabStyles))}
          value="developers"
        >
          <IbmWatsonxCodeAssistantForZRefactor size={20} />
          Dev
        </Tabs.Tab>
        <Tabs.Tab
          className={cx(css(tabOverrideStyles), css(smallTabStyles))}
          value="a11y"
        >
          <AccessibilityAlt size={20} />
          Accessibility
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="overview">{props.overview}</Tabs.Panel>
      <Tabs.Panel value="guidelines">{props.guidelines}</Tabs.Panel>
      <Tabs.Panel value="developers">{props.dev}</Tabs.Panel>
      <Tabs.Panel value="a11y">{props.a11y}</Tabs.Panel>
    </Tabs.Root>
  )
}

interface OverviewPageTabsProps {
  description: string
  overview: ReactNode
  dev: ReactNode
}

export function OverviewPageTabs(props: OverviewPageTabsProps) {
  return (
    <Tabs.Root defaultValue="overview" lazyMount>
      <Tabs.List className={css(tabListStyles)}>
        <Tabs.Tab
          className={cx(
            css({
              w: '1/2 !important',
            }),
            css(tabOverrideStyles),
          )}
          value="overview"
        >
          <InformationFilled size={20} />
          Overview
        </Tabs.Tab>
        <Tabs.Tab
          className={cx(
            css({
              w: '1/2 !important',
            }),
            css(tabOverrideStyles),
          )}
          value="developers"
        >
          <IbmWatsonxCodeAssistantForZRefactor size={20} />
          Dev
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview">{props.overview}</Tabs.Panel>
      <Tabs.Panel value="developers">{props.dev}</Tabs.Panel>
    </Tabs.Root>
  )
}

const tabListStyles = css.raw({
  borderBottom: 'none',
  bgColor: 'page.surface.100',
  justifyContent: 'space-evenly',
  mb: '8',
  minH: '4rem',
  rounded: 'full',
  shadow: 'md',
  '& > :is([data-part=indicator])': {
    bgGradient: 'to-br',
    gradientFrom: 'action.bg.initial',
    gradientTo: 'action.bg.active',
    minW: '1/4',
    h: 'full',
    rounded: 'full',
    zIndex: 'base',
  },
})

const tabOverrideStyles = css.raw({
  borderTopLeftRadius: 'full',
  borderTopRightRadius: 'full',
  h: '4rem',
  rounded: 'full',
  w: '1/3',
  zIndex: 'decorator',
  _after: {
    display: 'none',
  },
  _hover: {
    '&:not([data-selected])': {
      color: 'action.navigation.hover',
    },
  },
  _selected: {
    color: 'action.text.initial',
  },
  md: {
    fontSize: 'md',
  },
})

const smallTabStyles = css.raw({
  w: '1/4',
})
