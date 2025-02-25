import {
  InformationFilled,
  IbmWatsonxCodeAssistantForZRefactor,
  GroupObjectsSave,
  AccessibilityAlt,
} from '@carbon/icons-react'
import { type ReactNode } from 'react'

type Tabs = 'overview' | 'guidelines' | 'dev' | 'a11y'

export type TwoTabs = Extract<Tabs, 'overview' | 'dev'>
interface TwoTabData {
  tabs: TwoTabs[]
  tabIcons: Record<TwoTabs, ReactNode>
}

export type FourTabs = Tabs
interface FourTabData {
  tabs: Tabs[]
  tabIcons: Record<Tabs, ReactNode>
}

/**
 * A function that creates the tab data for a two-tab layout.
 */
export function createTwoTabData(): TwoTabData {
  const tabs: TwoTabs[] = ['overview', 'dev']
  const tabIcons = {
    overview: <InformationFilled size={20} />,
    dev: <IbmWatsonxCodeAssistantForZRefactor size={20} />,
  }
  return { tabs, tabIcons }
}

/**
 * A function that creates the tab data for a four-tab layout.
 */
export function createFourTabData(): FourTabData {
  const tabs: FourTabs[] = ['overview', 'guidelines', 'dev', 'a11y']
  const tabIcons = {
    overview: <InformationFilled size={20} />,
    guidelines: <GroupObjectsSave size={20} />,
    dev: <IbmWatsonxCodeAssistantForZRefactor size={20} />,
    a11y: <AccessibilityAlt size={20} />,
  }
  return { tabs, tabIcons }
}

/**
 * A function that fetches the tab data for a two-tab layout.
 */
export function getTwoTabsData(): Promise<TwoTabs[]> {
  return new Promise((resolve) => {
    resolve(createTwoTabData().tabs)
  })
}

/**
 * A function that fetches the tab data for a four-tab layout.
 */
export function getFourTabsData(): Promise<FourTabs[]> {
  return new Promise((resolve) => {
    resolve(createFourTabData().tabs)
  })
}
