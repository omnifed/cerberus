import {
  AccessibilityAlt,
  GroupObjectsSave,
  IbmWatsonxCodeAssistantForZRefactor,
  InformationFilled,
} from '@cerberus-design/icons'
import { Tab, TabList, TabPanel, Tabs } from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'
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
    <Tabs active="overview" cache id="page-tabs">
      <TabList
        description={props.description}
        className={css({
          borderBottom: 'none',
          bgColor: 'neutral.surface.200',
          justifyContent: 'space-evenly',
          mb: '8',
          rounded: 'full',
        })}
      >
        <Tab className={tabOverrideStyles} value="overview">
          <InformationFilled size={20} />
          Overview
        </Tab>
        <Tab className={tabOverrideStyles} value="guidelines">
          <GroupObjectsSave size={20} />
          Guidelines
        </Tab>
        <Tab className={tabOverrideStyles} value="developers">
          <IbmWatsonxCodeAssistantForZRefactor size={20} />
          Dev
        </Tab>
        <Tab className={tabOverrideStyles} value="a11y">
          <AccessibilityAlt size={20} />
          Accessibility
        </Tab>
      </TabList>
      <TabPanel tab="overview">{props.overview}</TabPanel>
      <TabPanel tab="guidelines">{props.guidelines}</TabPanel>
      <TabPanel tab="developers">{props.dev}</TabPanel>
      <TabPanel tab="a11y">{props.a11y}</TabPanel>
    </Tabs>
  )
}

const tabOverrideStyles = css({
  borderTopLeftRadius: 'full',
  borderTopRightRadius: 'full',
  h: '3.7rem',
  rounded: 'full',
  w: '1/3',
  md: {
    fontSize: 'md',
  },
  _before: {
    bgColor: 'initial',
    bottom: 'initial',
    content: '""',
    h: 'initial',
    position: 'initial',
    left: 'initial',
    right: 'initial',
    transitionProperty: 'initial',
    transitionDuration: 'initial',
    transitionTimingFunction: 'initial',
    w: 'initial',
    willChange: 'initial',
    zIndex: 'initial',
  },
  _after: {
    borderTopLeftRadius: 'initial',
    borderTopRightRadius: 'initial',
    bottom: 'initial',
    bgColor: 'initial',
    content: '""',
    left: 'initial',
    position: 'initial',
    right: 'initial',
    h: 'initial',
    transition: 'initial',
    willChange: 'initial',
    w: 'initial',
    zIndex: 'initial',
  },
  _hover: {
    bgColor: 'action.navigation.hover',
    color: 'neutral.surface.initial',
  },
  _selected: {
    bgGradient: 'to-bl',
    gradientFrom: 'action.bg.initial',
    gradientTo: 'action.bg.active',
    color: 'action.text.initial',
    _hover: {
      color: 'action.text.initial',
    },
  },
})
