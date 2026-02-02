'use client'

import { type PropsWithChildren } from 'react'
import { Collapsible, useCollapsible } from '@cerberus-design/react'
import { TriggerContent } from './trigger-content'

export function CollapsibleProvider(props: PropsWithChildren<object>) {
  const collapsible = useCollapsible({
    defaultOpen: true,
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
        py={{
          base: 'md',
          lg: 'sm',
        }}
        textStyle="body-sm"
        transitionProperty="background-color,color"
        transitionDuration="fast"
        w="full"
        _elysiumTheme={{
          bgColor: 'secondaryAction.bg.hover/10',
        }}
        _hover={{
          bgColor: 'secondaryAction.bg.hover',
          color: 'secondaryAction.text.hover',
          _elysiumTheme: {
            bgColor: 'secondaryAction.bg.initial/50',
          },
        }}
      >
        <TriggerContent open={collapsible.open} />
      </Collapsible.Trigger>
    </Collapsible.RootProvider>
  )
}
