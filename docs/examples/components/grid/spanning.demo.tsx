import { DecorativeBox } from '@/app/components/decorative-box'
import { Grid, GridItem } from 'styled-system/jsx'

export function SpanningDemo() {
  return (
    <Grid
      h="200px"
      gridTemplateRows="repeat(2, 1fr)"
      gridTemplateColumns="repeat(5, 1fr)"
      gap="md"
      w="3/4"
    >
      <GridItem rowSpan={2} colSpan={1}>
        <DecorativeBox>rowSpan=2</DecorativeBox>
      </GridItem>
      <GridItem colSpan={2}>
        <DecorativeBox>colSpan=2</DecorativeBox>
      </GridItem>
      <GridItem colSpan={2}>
        <DecorativeBox>colSpan=2</DecorativeBox>
      </GridItem>
      <GridItem colSpan={4}>
        <DecorativeBox>colSpan=4</DecorativeBox>
      </GridItem>
    </Grid>
  )
}
