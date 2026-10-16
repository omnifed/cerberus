import {
  getCategoryKeys,
  getTokenByPath,
  getTokensByCategory,
} from '@/lib/design-system'
import { TokenPath } from '@/styled-system/types'
import { For } from '@cerberus-design/react'
import { Box, Grid } from 'styled-system/jsx'

const paths = getCategoryKeys('shadows')

export default function ShadowTokens() {
  return (
    <Grid columns={1} gap="6">
      <For each={paths}>{(path) => <ShadowDemo key={path} path={path} />}</For>
    </Grid>
  )
}

type SDProps = {
  path: TokenPath
}

function ShadowDemo(props: SDProps) {
  const token = getTokenByPath(props.path)
  if (!token) return null
  return (
    <Box borderWidth="1px" borderColor="page.border.initial" rounded="md" p="4">
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
            {props.path.split('.').slice(1)}
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
            {token.cssVar}
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}
