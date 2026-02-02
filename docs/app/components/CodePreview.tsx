import { type PropsWithChildren, type ReactNode } from 'react'
import { Collapsible } from '@cerberus-design/react'
import { Box, HStack, VStack } from 'styled-system/jsx'
import { CollapsibleCode } from './code-preview/collapsible-code'
import { CollapsibleProvider } from './code-preview/collapsible-provider.client'
import { getExampleCode } from './code-preview/helpers'
import { CopyButton } from './copy-button'

interface CodePreviewProps {
  id: string
  preview: ReactNode | string
}

export default async function CodePreview(
  props: PropsWithChildren<CodePreviewProps>,
) {
  const { code, preview, fallback, rawContent } = await getExampleCode(
    props.id,
    props.children,
  )

  return (
    <VStack
      border="1px solid"
      borderColor="page.border.initial"
      gap="0"
      rounded="lg"
      shadow="md"
      w="full"
    >
      <HStack justify="center" py="md" w="full">
        {preview ?? props.preview}
      </HStack>

      <CollapsibleProvider>
        <Collapsible.Content pos="relative">
          <Box
            left="calc(100% - 2rem)"
            pos="sticky"
            top="8"
            w="fit-content"
            zIndex="sticky"
          >
            <CopyButton content={rawContent} />
          </Box>

          <CollapsibleCode code={code} fallback={fallback} />
        </Collapsible.Content>
      </CollapsibleProvider>
    </VStack>
  )
}
