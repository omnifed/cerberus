'use client'

import { Tabs } from '@cerberus-design/react'
import { useParams } from 'next/navigation'
import { type PropsWithChildren } from 'react'

/**
 * A client-side component that renders the Tab.Root utilizing the `useParams`
 * hook from `next/navigation` to get the current slug.
 *
 * @remarks
 *
 * We have to do this because if we get the params from the route, the tabs
 * will re-render with each route change. 😭
 */
export function TabbedRouteTabsRoot(props: PropsWithChildren<object>) {
  const { slug } = useParams()

  return (
    <Tabs.Root defaultValue={slug ?? 'overview'}>{props.children}</Tabs.Root>
  )
}
