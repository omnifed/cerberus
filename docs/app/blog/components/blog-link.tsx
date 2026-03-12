import CerberusLogo from '@/app/components/cerberus-logo'
import { Box, HStack, VStack } from '@/styled-system/jsx'
import { ArrowRight } from '@carbon/icons-react'
import { Show, Tag, Text } from '@cerberus-design/react'
import Link, { LinkProps } from 'next/link'
import { BlogHeaderProps } from './blog-header'

interface Props {
  idx: number
  slug: string
}

export async function BlogLink(props: Props) {
  const { idx, slug } = props

  const post = await import(`../[slug]/content/${slug}.mdx`)
  const frontmatter = post.frontmatter as BlogHeaderProps

  if (!post) return null

  const featTitle = {
    blog: 'Blog',
    release: 'Cerberus',
  }

  return (
    <Link href={`/blog/${slug}` as LinkProps<string>['href']}>
      <Box
        data-placement="top"
        animationStyle="slide-fade-in"
        animationDuration="slow"
        animationFillMode="forwards"
        className="group"
        bg="page.bg.100"
        border="1px solid"
        borderColor="page.border.initial"
        h="21rem"
        opacity="0"
        overflow="hidden"
        rounded="sm"
        transition="all 200ms ease-in-out"
        w="full"
        _hover={{
          shadow: 'sm',
        }}
        style={{
          animationDelay: `${200 * idx}ms`,
        }}
      >
        <VStack gradient="charon-dark" h="11.187rem" justify="center" w="full">
          <HStack>
            <Box w="4rem">
              <CerberusLogo />
            </Box>
            <Text textStyle="heading-md">
              {featTitle[frontmatter.category as keyof typeof featTitle]}
            </Text>

            <Show when={frontmatter.category === 'release'}>
              <Box marginBlockStart="0.5">
                <Tag palette="page">{frontmatter.version}</Tag>
              </Box>
            </Show>
          </HStack>
        </VStack>

        <VStack alignItems="flexStart" paddingBlock="lg" pxi="md" w="full">
          <HStack justify="space-between">
            <Text color="page.text.100" textStyle="label-sm">
              {frontmatter.date}
            </Text>
            <Text textStyle="label-sm">{frontmatter.timeToRead} min read</Text>
          </HStack>

          <Text color="page.text.300" textStyle="heading-sm">
            {frontmatter.title}
          </Text>
          <Text color="page.text.200" textStyle="body-md">
            {frontmatter.description}
          </Text>

          <HStack color="action.navigation.initial">
            <Text color="currentColor" textStyle="button-sm">
              Read more
            </Text>
            <Box
              transitionProperty="transform"
              transitionDuration="fast"
              transitionTimingFunction="ease-in-out"
              _groupHover={{
                transform: 'translateX(0.25rem)',
              }}
            >
              <ArrowRight />
            </Box>
          </HStack>
        </VStack>
      </Box>
    </Link>
  )
}
