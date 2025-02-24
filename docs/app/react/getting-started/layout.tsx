import TwoTabLayout, {
  type TwoTabLayoutProps,
} from '@/app/components/page-tabs/two-tab-layout'
import { type TwoTabs } from '@/components/page-tabs/primitives'
import type { PropsWithChildren } from 'react'

import { frontmatter } from './[slug]/overview.mdx'

interface LayoutProps {
  params: {
    slug: TwoTabs
  }
}

export default function Layout(props: PropsWithChildren<LayoutProps>) {
  return (
    <TwoTabLayout
      path="react/getting-started"
      meta={frontmatter as TwoTabLayoutProps['meta']}
    >
      {props.children}
    </TwoTabLayout>
  )
}
