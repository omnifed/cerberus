import FourTabLayout, {
  type FourTabLayoutProps,
} from '@/app/components/page-tabs/four-tab-layout'
import type { PropsWithChildren } from 'react'

import { frontmatter } from './[slug]/overview.mdx'

export interface RouteProps {
  params: {
    slug: 'overview' | 'guidelines' | 'developers' | 'a11y'
  }
}

export default function Layout(props: PropsWithChildren<RouteProps>) {
  return (
    <FourTabLayout
      path="loading-states"
      meta={frontmatter as FourTabLayoutProps['meta']}
    >
      {props.children}
    </FourTabLayout>
  )
}
