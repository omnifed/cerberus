import { ArrowRight } from '@carbon/icons-react'
import { For, Text, Tag, Show } from '@cerberus-design/react'
import { Box, HStack, Grid, GridItem, VStack } from '@/styled-system/jsx'
import CerberusLogo from '@/app/components/cerberus-logo'
import Link from 'next/Link'

// blog metadata
import { frontmatter as v018release } from './cerberus-v018-release/page.mdx'

export default function Page() {
  const featTitle = {
    blog: 'Blog',
    release: 'Cerberus',
  }
  const pageData: page = {
    'cerberus-v018-release': v018release,
  }

  return (
    <Grid
      columns={{
        base: 1,
        md: 2,
        lg: 3,
      }}
      gap="md"
      w="full"
    >
      <For each={Object.values(pageData ?? {})}>
        {(frontMatter, idx) => (
          <GridItem key={idx}>
            <Link href={`/blog/${frontMatter.slug}`}>
              <Box
                data-placement="top"
                animationStyle="slide-fade-in"
                animationDelay={`${200 * idx}ms`}
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
              >
                <VStack
                  gradient="charon-dark"
                  h="11.187rem"
                  justify="center"
                  w="full"
                >
                  <HStack>
                    <Box w="4rem">
                      <CerberusLogo />
                    </Box>
                    <Text textStyle="heading-md">
                      {
                        featTitle[
                          frontMatter.category as keyof typeof featTitle
                        ]
                      }
                    </Text>

                    <Show when={frontMatter.category === 'release'}>
                      <Box marginBlockStart="0.5">
                        <Tag palette="page">{frontMatter.version}</Tag>
                      </Box>
                    </Show>
                  </HStack>
                </VStack>

                <VStack
                  alignItems="flexStart"
                  paddingBlock="lg"
                  pxi="md"
                  w="full"
                >
                  <HStack justify="space-between">
                    <Text color="page.text.100" textStyle="label-sm">
                      {frontMatter.date}
                    </Text>
                    <Text textStyle="label-sm">
                      {frontMatter.timeToRead} min read
                    </Text>
                  </HStack>

                  <Text color="page.text.300" textStyle="heading-sm">
                    {frontMatter.title}
                  </Text>
                  <Text color="page.text.200" textStyle="body-md">
                    {frontMatter.description}
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
          </GridItem>
        )}
      </For>
    </Grid>
  )
}
