import { Box } from '@cerberus-design/styled-system/jsx'
import ApiLinks from '@/app/components/ApiLinks'
import { getTwoTabsData } from '@/app/components/page-tabs/primitives'
import type { RouteProps } from '../layout'

import Overview from './overview.mdx'
import Dev, { frontmatter } from './dev.mdx'

export async function generateStaticParams() {
  const tabs = await getTwoTabsData()
  return tabs.map((tab) => ({
    slug: tab,
  }))
}

export default async function Page(props: RouteProps) {
  const data = await props.params

  const routeContent = {
    overview: <Overview />,
    dev: (
      <>
        <ApiLinks {...frontmatter} />
        <Dev />
      </>
    ),
  }

  return (
    <Box w="full">{routeContent[data?.slug as keyof typeof routeContent]}</Box>
  )
}
