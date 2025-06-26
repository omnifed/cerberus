'use client'

import { Box, Grid } from 'styled-system/jsx'
import { tokens } from '@cerberus-design/panda-preset'

export function ShadowTokens() {
  const shadowTokens = tokens.shadows

  return (
    <Grid columns={1} gap="6">
      {Object.entries(shadowTokens).map(([key, shadow]) => (
        <Box
          key={key}
          borderWidth="1px"
          borderColor="page.border.initial"
          rounded="md"
          p="4"
        >
          <Grid columns={2} gap="4" alignItems="center">
            <Box>
              <Box
                bg="page.surface.initial"
                w="16"
                h="16"
                rounded="md"
                shadow={key as 'sm' | 'md' | 'lg'}
              />
            </Box>
            <Box>
              <Box fontWeight="semibold" mb="2">
                {key}
              </Box>
              <Box
                fontFamily="mono"
                fontSize="sm"
                color="page.text.200"
                bg="page.surface.100"
                p="2"
                rounded="sm"
                overflowX="auto"
              >
                {typeof shadow.value === 'object' &&
                !Array.isArray(shadow.value)
                  ? `{offsetX: ${shadow.value.offsetX}, offsetY: ${shadow.value.offsetY}, blur: ${shadow.value.blur}, spread: ${shadow.value.spread}, color: "${shadow.value.color}"}`
                  : Array.isArray(shadow.value)
                    ? `[${shadow.value.map((s) => `"${s}"`).join(', ')}]`
                    : `"${shadow.value}"`}
              </Box>
            </Box>
          </Grid>
        </Box>
      ))}
    </Grid>
  )
}
