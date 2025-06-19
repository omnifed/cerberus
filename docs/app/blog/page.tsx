import { ArrowRight } from '@carbon/icons-react'
import { For, Text, Tag, Show } from '@cerberus-design/react'
import {
  Box,
  HStack,
  Grid,
  GridItem,
  VStack,
  Container,
} from '@/styled-system/jsx'
import CerberusLogo from '@/app/components/cerberus-logo'
import Link, { type LinkProps } from 'next/link'
import { items } from './[slug]/content/items'

export default function Page() {
  const featTitle = {
    blog: 'Blog',
    release: 'Cerberus',
  }

  return (
    <Container paddingBlock="4rem">
      <header>
        <Text as="h1" textStyle="heading-xl">
          Changeblog
        </Text>
        <Text
          color="page.text.100"
          fontSize="1.25rem"
          paddingBlockStart="sm"
          textStyle="body-lg"
        >
          The Cerberus blog and updates for changes and releases.
        </Text>
      </header>

      <Grid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        gap="md"
        paddingBlockStart="4rem"
        w="full"
      >
        <For each={items}>
          {(meta, idx) => (
            <GridItem key={meta.id}>
              <Link href={`/blog/${meta.slug}` as LinkProps<string>['href']}>
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
                        {featTitle[meta.category as keyof typeof featTitle]}
                      </Text>

                      <Show when={meta.category === 'release'}>
                        <Box marginBlockStart="0.5">
                          <Tag palette="page">{meta.version}</Tag>
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
                        {meta.frontmatter.date}
                      </Text>
                      <Text textStyle="label-sm">
                        {meta.frontmatter.timeToRead} min read
                      </Text>
                    </HStack>

                    <Text color="page.text.300" textStyle="heading-sm">
                      {meta.frontmatter.title}
                    </Text>
                    <Text color="page.text.200" textStyle="body-md">
                      {meta.frontmatter.description}
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
    </Container>
  )
}
