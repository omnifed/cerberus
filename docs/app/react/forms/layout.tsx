import TwoTabLayout, {
  type TwoTabLayoutProps,
} from '@/app/components/page-tabs/two-tab-layout'
import { type TwoTabs } from '@/app/components/page-tabs/primitives'
import type { PropsWithChildren } from 'react'

import { frontmatter } from './[slug]/overview.mdx'

export interface RouteProps {
  params: Promise<{
    slug: TwoTabs
  }>
}

export default function Layout(props: PropsWithChildren<RouteProps>) {
  return (
    <TwoTabLayout
      path="react/forms"
      meta={frontmatter as TwoTabLayoutProps['meta']}
    >
      {props.children}
    </TwoTabLayout>
  )
}
