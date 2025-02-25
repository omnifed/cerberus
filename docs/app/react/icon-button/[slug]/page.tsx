import { Box } from '@cerberus-design/styled-system/jsx'
import { getFourTabsData } from '@/app/components/page-tabs/primitives'
import ApiLinks from '@/app/components/ApiLinks'
import type { RouteProps } from '../layout'

import Overview from './overview.mdx'
import Guidelines from './guidelines.mdx'
import Dev, { frontmatter } from './dev.mdx'
import A11y from './a11y.mdx'

export async function generateStaticParams() {
  const tabs = await getFourTabsData()
  return tabs.map((tab) => ({
    slug: tab,
  }))
}

export default async function Page(props: RouteProps) {
  const { slug } = await props.params

  const routeContent = {
    overview: <Overview />,
    guidelines: <Guidelines />,
    dev: (
      <>
        <ApiLinks {...frontmatter} />
        <Dev />
      </>
    ),
    a11y: <A11y />,
  }

  return <Box w="full">{routeContent[slug as keyof typeof routeContent]}</Box>
}
