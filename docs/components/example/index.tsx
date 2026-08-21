import { getCodeString } from '@/lib/shiki'
import { Collapsible } from '@cerberus-design/react'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { ReactNode, Suspense } from 'react'
import { Box, HStack, VStack } from 'styled-system/jsx'
import { CollapsibleCode } from './collapsible-code'
import { CollapsibleProvider } from './collapsible-provider.client'
import { CopyButton } from './copy-button.client'

interface ExampleProps {
  path: string
  demo: string
}

// This handles the heavy lifting, file reading, and cached Shiki execution.
async function ExampleContent({ path, demo }: ExampleProps) {
  let previewNode: ReactNode
  let rawContent = ''

  try {
    const module = await import(`@/examples/${path}/index.tsx`)
    const demoDef = module.DEMOS[demo]

    if (!demoDef || !demoDef.preview) {
      throw new Error('Demo or preview node not exported')
    }
    previewNode = demoDef.preview

    const filePath = resolve(process.cwd(), `examples/${path}/${demo}.demo.tsx`)
    rawContent = await readFile(filePath, 'utf-8')
    rawContent = rawContent.replaceAll('@cerberus-design', '@cerberus/react')
  } catch (error) {
    console.error('Error loading example:', error)
    return (
      <div className="p-4 text-red-500 border border-red-500 rounded-md">
        Failed to load demo:{' '}
        <code>
          {path}/{demo}
        </code>
      </div>
    )
  }

  const highlightedHtml = await getCodeString(rawContent)

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
    >
      <HStack justify="center" py="md" w="full">
        {previewNode}
      </HStack>

      <CollapsibleProvider>
        <Collapsible.Content pos="relative">
          <Box
            left="calc(100% - 3rem)"
            pos="absolute"
            top="4"
            w="fit-content"
            zIndex="decorator"
          >
            <CopyButton content={rawContent} />
          </Box>

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
