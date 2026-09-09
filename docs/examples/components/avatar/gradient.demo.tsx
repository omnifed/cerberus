import { UserAvatar } from '@carbon/icons-react'
import { Avatar, For, Text } from '@cerberus-design/react'
import { GRADIENTS } from '@cerberus/tokens/src/const'
import { Grid, GridItem, HStack } from 'styled-system/jsx'

export function GradientDemo() {
  return (
    <Grid
      columns={{
        base: 1,
        md: 2,
      }}
      columnGap="xl"
      rowGap="md"
    >
      <For each={GRADIENTS}>
        {(gradient) => (
          <GridItem colSpan={1} key={gradient}>
            <HStack gap="md">
              <Avatar fallback={<UserAvatar />} gradient={gradient} />
              <Text textStyle="label-sm">{gradient}</Text>
            </HStack>
          </GridItem>
        )}
      </For>
    </Grid>
  )
}
