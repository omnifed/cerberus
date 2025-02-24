import ApiLinks from '@/app/components/ApiLinks'
import { Box } from '@cerberus-design/styled-system/jsx'

import Overview from '../overview.mdx'
import Guidelines from '../guidelines.mdx'
import Dev, { frontmatter } from '../dev.mdx'
import A11y from '../a11y.mdx'

interface AccordionRoutePageProps {
  params: {
    slug: 'overview' | 'guidelines' | 'developers' | 'a11y'
  }
}

export default async function AccordionRoutePage(
  props: AccordionRoutePageProps,
) {
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
