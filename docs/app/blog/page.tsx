import { BlogLink } from '@/components/blog-link'
import { getBlogPosts } from '@/lib/blog-content'
import { Container, Grid, GridItem } from '@/styled-system/jsx'
import { For, Text } from '@cerberus-design/react'

export default async function Page() {
  const posts = getBlogPosts()

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
        <For each={posts}>
          {(post, idx) => (
            <GridItem key={post.slug}>
              <BlogLink idx={idx} {...post} />
            </GridItem>
          )}
        </For>
      </Grid>
    </Container>
  )
}
