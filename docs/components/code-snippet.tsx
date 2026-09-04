import { CollapsibleCode } from '@/components/example/collapsible-code'
import { getCodeString } from '@/lib/get-code-string'
import { Box } from '@/styled-system/jsx'
import { PropsWithChildren } from 'react'

interface Props {
  snippet: string
}

/**
 * @deprecated use inline {@link CodeSnippet} instead
 */
export async function CodeSnippet(props: PropsWithChildren<Props>) {
  'use cache'
  const highlightedHtml = await getCodeString(props.snippet)
  return (
    <Box
      border="1px solid"
      borderColor="page.border.initial/30"
      my="6"
      overflow="hidden"
      pos="relative"
      rounded="lg"
      zIndex="-1"
    >
      <CollapsibleCode htmlCode={highlightedHtml} />
    </Box>
  )
}
