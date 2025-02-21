import FourTabLayout, {
  type FourTabLayoutProps,
} from '@/app/components/page-tabs/four-tab-layout'
import type { PropsWithChildren } from 'react'
import { frontmatter } from './overview.mdx'

interface LayoutProps {
  params: {
    slug: 'overview' | 'guidelines' | 'developers' | 'a11y'
  }
}

export default function Layout(props: PropsWithChildren<LayoutProps>) {
  return (
    <FourTabLayout
      path="admonition"
      meta={frontmatter as FourTabLayoutProps['meta']}
    >
      {props.children}
    </FourTabLayout>
  )
}
