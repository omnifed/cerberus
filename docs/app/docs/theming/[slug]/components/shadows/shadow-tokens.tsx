import allTokens from '@/styled-system/specs/tokens.json'
import { For } from '@cerberus-design/react'
import { Box, Grid } from 'styled-system/jsx'

export function ShadowTokens() {
  const shadowGroup = allTokens.data.find((token) => token.type === 'shadows')
  const values = shadowGroup?.values ?? []

  return (
    <Grid columns={1} gap="6">
      <For each={values}>
        {(token) => (
          <Box
            key={token.name}
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
                  style={{
                    boxShadow: token.cssVar,
                  }}
                />
              </Box>
              <Box>
                <Box fontWeight="semibold" mb="2">
                  {token.name}
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
                  {token.value}
                </Box>
              </Box>
            </Grid>
          </Box>
        )}
      </For>
    </Grid>
  )
}
