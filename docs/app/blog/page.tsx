import { Container, Grid, GridItem } from '@/styled-system/jsx'
import { For, Text } from '@cerberus-design/react'
import { items } from './[slug]/content/items'
import { BlogLink } from './components/blog-link'

export default async function Page() {
  return (
    <Container paddingBlock="4rem">
      <header>
        <Text as="h1" textStyle="heading-xl">
          Changeblog
        </Text>
        <Text color="page.text.100" fontSize="1.25rem" paddingBlockStart="sm" textStyle="body-lg">
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
              <BlogLink idx={idx} slug={meta.slug} />
            </GridItem>
          )}
        </For>
      </Grid>
    </Container>
  )
}
