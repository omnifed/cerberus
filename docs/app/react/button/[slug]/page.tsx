import ApiLinks from '@/app/components/ApiLinks'
import { Box } from '@cerberus-design/styled-system/jsx'
import type { RouteProps } from '../layout'

import Overview from './overview.mdx'
import Guidelines from './guidelines.mdx'
import Dev, { frontmatter } from './dev.mdx'
import A11y from './a11y.mdx'

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
