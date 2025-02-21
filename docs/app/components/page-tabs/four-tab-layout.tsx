import { TabPageContent } from '@/app/components/PageLayout'
import FeatureHeader from '@/app/components/FeatureHeader'
import type { MatchFeatureKind } from '@/app/components/MatchFeatureImg'
import {
  AccessibilityAlt,
  GroupObjectsSave,
  IbmWatsonxCodeAssistantForZRefactor,
  InformationFilled,
} from '@carbon/icons-react'
import { For, Tabs } from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'

export interface FourTabLayoutProps {
  path: string
  meta: {
    heading: string
    description: string
    a11y: MatchFeatureKind
  }
}

/**
 * A layout component that renders a page with four tabs used for the
 * Components section. The tabs are Overview, Guidelines, Dev, and A11y.
 */
export default function FourTabLayout(
  props: PropsWithChildren<FourTabLayoutProps>,
) {
  const tabs = ['overview', 'guidelines', 'dev', 'a11y']
  const tabIcons = {
    overview: <InformationFilled size={20} />,
    guidelines: <GroupObjectsSave size={20} />,
    dev: <IbmWatsonxCodeAssistantForZRefactor size={20} />,
    a11y: <AccessibilityAlt size={20} />,
  }

  return (
    <>
      <TabPageContent>
        <FeatureHeader {...props.meta} />

        <Tabs.Root defaultValue="overview" lazyMount>
          <Tabs.List
            className={css({
              borderBottom: 'none',
              bgColor: 'page.surface.100',
              justifyContent: 'space-evenly',
              mb: '8',
              minH: '4rem',
              rounded: 'full',
              position: 'sticky',
              shadow: 'md',
              top: 0,
              zIndex: 'sticky',
              '& > :is([data-part=indicator])': {
                bgGradient: 'to-br',
                gradientFrom: 'action.bg.initial',
                gradientTo: 'action.bg.active',
                minW: '1/4',
                h: 'full',
                rounded: 'full',
                zIndex: 'base',
              },
            })}
          >
            <For each={tabs}>
              {(tab) => (
                <Tabs.Tab
                  className={css({
                    borderTopLeftRadius: 'full',
                    borderTopRightRadius: 'full',
                    cursor: 'pointer',
                    h: '4rem',
                    rounded: 'full',
                    textTransform: 'capitalize',
                    w: '1/4',
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
                  })}
                  key={tab}
                  value={tab}
                  asChild
                >
                  <Link href={`/react/${props.path}/${tab}`}>
                    {tabIcons[tab as keyof typeof tabIcons]}
                    {tab}
                  </Link>
                </Tabs.Tab>
              )}
            </For>
          </Tabs.List>

          <For each={tabs}>
            {(tab) => (
              <Tabs.Panel key={tab} value={tab}>
                {props.children}
              </Tabs.Panel>
            )}
          </For>
        </Tabs.Root>
      </TabPageContent>
    </>
  )
}
