import { type PropsWithChildren, type ReactNode } from 'react'
import { Collapsible } from '@cerberus-design/react'
import { HStack, VStack } from 'styled-system/jsx'
import { CollapsibleCode } from './code-preview/collapsible-code'
import { CollapsibleProvider } from './code-preview/collapsible-provider.client'

interface CodePreviewProps {
  id: string
  preview: ReactNode | string
}

export default function CodePreview(
  props: PropsWithChildren<CodePreviewProps>,
) {
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
        {props.preview}
      </HStack>

      <CollapsibleProvider>
        <Collapsible.Content>
          <CollapsibleCode id={props.id}>{props.children}</CollapsibleCode>
        </Collapsible.Content>
      </CollapsibleProvider>
    </VStack>
  )
}
