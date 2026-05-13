import { Grid, GridItem } from '@/styled-system/jsx'
import { Information } from '@carbon/icons-react'
import { Tag, Text } from '@cerberus-design/react'
import { Fragment } from 'react'
import { tagPalettes, variants } from './data'

const COLOR_LIST = tagPalettes.map((palette) => ({ palette, variants }))

export function PaletteDemo() {
  return (
    <Grid columns={5} gap="md" px="lg" w="full">
      {COLOR_LIST.map(({ palette, variants }) => (
        <Fragment key={`${palette}`}>
          <Text as="small">{palette}:</Text>
          {variants.map(({ usage, shape }) => (
            <GridItem key={`${palette}:${usage}:${shape}`} colSpan={1}>
              <Tag palette={palette} usage={usage} shape={shape}>
                <Information />
                Label
              </Tag>
            </GridItem>
          ))}
        </Fragment>
      ))}
    </Grid>
  )
}
