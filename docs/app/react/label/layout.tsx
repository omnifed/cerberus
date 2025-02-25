import FourTabLayout, {
  type FourTabLayoutProps,
} from '@/app/components/page-tabs/four-tab-layout'
import type { FourTabs } from '@/app/components/page-tabs/primitives'
import type { PropsWithChildren } from 'react'

import { frontmatter } from './[slug]/overview.mdx'

export interface RouteProps {
  params: {
    slug: FourTabs
  }
}

export default function Layout(props: PropsWithChildren<RouteProps>) {
  return (
    <FourTabLayout
      path="label"
      meta={frontmatter as FourTabLayoutProps['meta']}
    >
      {props.children}
    </FourTabLayout>
  )
}
