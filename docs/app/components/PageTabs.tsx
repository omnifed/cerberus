import {
  AccessibilityAlt,
  GroupObjectsSave,
  IbmWatsonxCodeAssistantForZRefactor,
  InformationFilled,
} from '@carbon/icons-react'
import { Tab, TabPanel, Tabs, TabsList } from '@cerberus-design/react'
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
    <Tabs cache uuid="components" defaultValue="overview">
      <TabsList className={css(tabListStyles)}>
        <Tab
          className={cx(css(tabOverrideStyles), css(smallTabStyles))}
          value="overview"
        >
          <InformationFilled size={20} />
          Overview
        </Tab>
        <Tab
          className={cx(css(tabOverrideStyles), css(smallTabStyles))}
          value="guidelines"
        >
          <GroupObjectsSave size={20} />
          Guidelines
        </Tab>
        <Tab
          className={cx(css(tabOverrideStyles), css(smallTabStyles))}
          value="developers"
        >
          <IbmWatsonxCodeAssistantForZRefactor size={20} />
          Dev
        </Tab>
        <Tab
          className={cx(css(tabOverrideStyles), css(smallTabStyles))}
          value="a11y"
        >
          <AccessibilityAlt size={20} />
          Accessibility
        </Tab>
      </TabsList>

      <TabPanel value="overview">{props.overview}</TabPanel>
      <TabPanel value="guidelines">{props.guidelines}</TabPanel>
      <TabPanel value="developers">{props.dev}</TabPanel>
      <TabPanel value="a11y">{props.a11y}</TabPanel>
    </Tabs>
  )
}

interface OverviewPageTabsProps {
  description: string
  overview: ReactNode
  dev: ReactNode
}

export function OverviewPageTabs(props: OverviewPageTabsProps) {
  return (
    <Tabs defaultValue="overview" lazyMount>
      <TabsList className={css(tabListStyles)}>
        <Tab
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
        </Tab>
        <Tab
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
        </Tab>
      </TabsList>
      <TabPanel value="overview">{props.overview}</TabPanel>
      <TabPanel value="developers">{props.dev}</TabPanel>
    </Tabs>
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
