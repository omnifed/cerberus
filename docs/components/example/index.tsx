import { getCodeString } from '@/lib/shiki'
import { Collapsible } from '@cerberus-design/react'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { ReactNode, Suspense } from 'react'
import { Box, Float, HStack, Stack, VStack } from 'styled-system/jsx'
import { CollapsibleCode } from './collapsible-code'
import { CollapsibleProvider } from './collapsible-provider.client'
import { CopyButton } from './copy-button.client'

interface ExampleProps {
  path: string
  demo: string
}

// This handles the heavy lifting, file reading, and cached Shiki execution.
async function ExampleContent({ path, demo }: ExampleProps) {
  let previewNode: ReactNode | null = null
  let rawContent = ''

  try {
    // Attempt to grab the preview from the registry.
    // We wrap this in its own try/catch so it fails silently if
    // the registry or demo key doesn't exist for code-only snippets.
    try {
      const module = await import(`@/examples/${path}/index.tsx`)
      const demoDef = module.DEMOS?.[demo]
      if (demoDef?.preview) {
        previewNode = demoDef.preview
      }
    } catch (importError) {
      // Ignored: Likely a code-only snippet without a registry entry
      console.error('Error loading demo:', importError)
    }

    // Read the source file from disk.
    // This is the true source of truth, so if this fails, we throw the error.
    const filePath = resolve(process.cwd(), `examples/${path}/${demo}.demo.tsx`)
    rawContent = await readFile(filePath, 'utf-8')
    rawContent = rawContent.replaceAll('@cerberus-design', '@cerberus/react')
  } catch {
    return (
      <Stack
        border="1px solid"
        borderColor="danger.border.initial"
        color="danger.text.100"
        p="md"
        rounded="md"
      >
        Failed to load code file:{' '}
        <code>
          {path}/{demo}.demo.tsx
        </code>
      </Stack>
    )
  }

  const highlightedHtml = await getCodeString(rawContent)

  if (!previewNode) {
    return (
      <Box
        border="1px solid"
        borderColor="page.border.initial/30"
        my="6"
        overflow="hidden"
        pos="relative"
        rounded="lg"
      >
        <Box right="4" pos="absolute" top="4" zIndex="decorator">
          <CopyButton content={rawContent} />
        </Box>
        <CollapsibleCode htmlCode={highlightedHtml} />
      </Box>
    )
  }

  return (
    <VStack
      data-slot="example:root"
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
    >
      <HStack data-slot="example:preview" justify="center" py="md" w="full">
        {previewNode}
      </HStack>

      <CollapsibleProvider>
        <Collapsible.Content pos="relative">
          <Float placement="top-end" offset="6" zIndex="decorator">
            <CopyButton content={rawContent} />
          </Float>

          <CollapsibleCode htmlCode={highlightedHtml} />
        </Collapsible.Content>
      </CollapsibleProvider>
    </VStack>
  )
}

// This satisfies the Next.js instant routing requirement and prevents React from stalling.
export function Example(props: ExampleProps) {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: '100%',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--page-surface-initial)',
          }}
          className="animate-pulse rounded-lg border"
        >
          Loading example...
        </div>
      }
    >
      <ExampleContent {...props} />
    </Suspense>
  )
}
