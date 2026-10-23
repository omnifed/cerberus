import { Grid, GridItem } from '@/styled-system/jsx'
import { Information } from '@carbon/icons-react'
import { For, Tag, Text } from '@cerberus-design/react'
import { Fragment } from 'react'
import { gradTagGradients, gradVariants } from './data'

const VARIANTS = gradTagGradients.map((gradient) => ({
  gradient,
  variants: gradVariants,
}))

export function GradientDemo() {
  return (
    <Grid columns={5} gap="md" px="lg" w="full">
      <For each={VARIANTS}>
        {(option) => (
          <Fragment key={option.gradient}>
            <Text as="small">{option.gradient}:</Text>

            <For each={option.variants}>
              {({ usage, shape }) => (
                <GridItem key={`${option.gradient}:${usage}:${shape}`} colSpan={1}>
                  <Tag gradient={option.gradient} usage={usage} shape={shape}>
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
