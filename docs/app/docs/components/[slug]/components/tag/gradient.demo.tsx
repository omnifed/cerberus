import { Grid, GridItem } from '@/styled-system/jsx'
import { Information } from '@carbon/icons-react'
import { Tag, Text } from '@cerberus-design/react'
import { Fragment } from 'react'
import { tagGradients, variants } from './data'

const GRAD_LIST = tagGradients.map((gradient) => ({ gradient, variants }))

export function GradientDemo() {
  return (
    <Grid columns={5} gap="md" px="lg" w="full">
      {GRAD_LIST.map(({ gradient, variants }) => (
        <Fragment key={`${gradient}`}>
          <Text as="small">{gradient}:</Text>
          {variants.map(({ usage, shape }, idx) => (
            <GridItem key={`${gradient}-${idx}`} colSpan={1}>
              <Tag gradient={gradient} usage={usage} shape={shape}>
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
