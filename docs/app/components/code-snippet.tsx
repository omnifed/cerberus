import { PropsWithChildren } from 'react'
import { CollapsibleCode } from './code-preview/collapsible-code'
import { getCodeString } from './code-preview/helpers'
import { Box } from '@/styled-system/jsx'

interface Props {
  snippet: string
}

export async function CodeSnippet(props: PropsWithChildren<Props>) {
  const content = await getCodeString(props.snippet)
  return (
    <Box
      border="1px solid"
      borderColor="page.border.initial/30"
      my="sm"
      overflow="hidden"
      pos="relative"
      rounded="lg"
    >
      <CollapsibleCode code={content} />
    </Box>
  )
}
