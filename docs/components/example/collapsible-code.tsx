import { cerberus } from '@cerberus-design/react'
import { Scrollable } from 'styled-system/jsx'

interface Props {
  htmlCode: string
}

export function CollapsibleCode({ htmlCode }: Props) {
  return (
    <Scrollable
      hideScrollbar
      bgColor="var(--shiki-background)"
      maxH="xl"
      maxW="full"
      pos="relative"
    >
      <cerberus.div
        dangerouslySetInnerHTML={{ __html: htmlCode }}
        suppressHydrationWarning
      />
    </Scrollable>
  )
}
