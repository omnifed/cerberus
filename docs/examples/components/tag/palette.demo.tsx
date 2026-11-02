import { Grid, GridItem } from '@/styled-system/jsx'
import { Information } from '@carbon/icons-react'
import { For, Tag, Text } from '@cerberus-design/react'
import { Fragment } from 'react'
import { tagPalettes, variants } from './data'

const VARIANTS = tagPalettes.map((palette) => ({ palette, variants }))

export function PaletteDemo() {
  return (
    <Grid columns={5} gap="md" px="lg" w="full">
      <For each={VARIANTS}>
        {({ palette, variants }) => (
          <Fragment key={String(palette)}>
            <Text as="small">{String(palette)}:</Text>

            <For each={variants}>
              {({ usage, shape }) => (
                <GridItem key={`${palette}:${usage}:${shape}`} colSpan={1}>
                  <Tag palette={palette} usage={usage} shape={shape}>
                    <Information />
                    Label
                  </Tag>
                </GridItem>
              )}
            </For>
          </Fragment>
        )}
      </For>
    </Grid>
  )
}
