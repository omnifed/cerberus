'use client'

import { Collapsible, useCollapsible } from '@cerberus-design/react'
import { type PropsWithChildren } from 'react'
import { TriggerContent } from './trigger-content'

export function CollapsibleProvider(props: PropsWithChildren) {
  const collapsible = useCollapsible({
    defaultOpen: false, // Defaulting to false saves initial layout shift
    lazyMount: true,
    unmountOnExit: true,
  })

  return (
    <Collapsible.RootProvider value={collapsible} w="full">
      {props.children}

      <Collapsible.Trigger
        alignItems="center"
        bgColor="secondaryAction.bg.initial/90"
        borderTop="1px solid"
        borderTopColor="page.border.initial"
        borderBottomRadius="lg"
        display="flex"
        gap="sm"
        justifyContent="center"
        py={{ base: 'md', lg: 'sm' }}
        textStyle="body-sm"
        transitionProperty="background-color,color"
        transitionDuration="fast"
        w="full"
        _hover={{
          bgColor: 'secondaryAction.bg.hover',
          color: 'secondaryAction.text.hover',
        }}
      >
        <TriggerContent open={collapsible.open} />
      </Collapsible.Trigger>
    </Collapsible.RootProvider>
  )
}
