import { DecorativeBox } from '@/app/components/decorative-box'
import { Grid } from 'styled-system/jsx'

export function BasicDemo() {
  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gap="md" w="3/4">
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
    </Grid>
  )
}
