import { DecorativeBox } from '@/app/components/decorative-box'
import { Grid, GridItem } from 'styled-system/jsx'

export function ColSpanDemo() {
  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)" gap="md" w="3/4">
      <GridItem colSpan={2}>
        <DecorativeBox h="20" />
      </GridItem>
      <GridItem colSpan={1}>
        <DecorativeBox h="20" />
      </GridItem>
      <GridItem colSpan={1}>
        <DecorativeBox h="20" />
      </GridItem>
    </Grid>
  )
}
