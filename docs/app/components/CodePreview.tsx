import { Suspense, type PropsWithChildren, type ReactNode } from 'react'
import { Collapsible } from '@cerberus-design/react'
import { Box, HStack, VStack } from 'styled-system/jsx'
import { CollapsibleCode } from './code-preview/collapsible-code'
import { CollapsibleProvider } from './code-preview/collapsible-provider.client'
import { getExampleCode } from './code-preview/helpers'
import { CopyButton } from './copy-button'

interface CodePreviewProps {
  id: string
  preview?: ReactNode | string
  context?: 'components' | 'data-grid'
}

export default async function CodePreview(props: PropsWithChildren<CodePreviewProps>) {
  const { code, preview, fallback, rawContent } = await getExampleCode(
    props.id,
    props.children,
    props.context,
  )

  if (!props.preview && props.id) {
    return <CollapsibleCode code={code} fallback={fallback} />
  }

  return (
    <VStack
      bgColor="page.surface.initial/20"
      backdropFilter="auto"
      backdropBlur="16px"
      backdropSaturate="180%"
      border="1px solid"
      borderColor="page.border.initial/30"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
      gap="0"
      rounded="lg"
      w="full"
      style={{
        backdropFilter: 'var(--backdrop-blur) var(--backdrop-saturate)',
      }}
    >
      <Suspense>
        <HStack justify="center" py="md" w="full">
          {preview ?? props.preview}
        </HStack>
      </Suspense>

      <CollapsibleProvider>
        <Collapsible.Content pos="relative">
          <Box
            left="calc(100% - 2rem)"
            pos="sticky"
            top="8"
            w="fit-content"
            zIndex="decorator"
          >
            <CopyButton content={rawContent} />
          </Box>

          <CollapsibleCode code={code} fallback={fallback} />
        </Collapsible.Content>
      </CollapsibleProvider>
    </VStack>
  )
}
