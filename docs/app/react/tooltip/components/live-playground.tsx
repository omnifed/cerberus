'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { InformationFilled } from '@carbon/icons-react'
import { Tooltip, type TooltipProps } from '@cerberus-design/react'
import { VStack } from 'styled-system/jsx'
import { css } from 'styled-system/css'

const api = {
  position: builder.Enum('position', ['top', 'right', 'bottom', 'left']),
  text: builder.Text('content', 'This is a tooltip'),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <TooltipPreview />
    </CodeBuilder>
  )
}

export function LivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import { Tooltip, type TooltipProps } from '@cerberus/react'

export function MyTooltip(props: TooltipProps) {
  return (
    <Tooltip
      position={{position}}
      content={{text}}
    >
      {props.children}
    </Tooltip>
  )
}`}
    >
      <TooltipPreview />
    </CodeBuilder>
  )
}

export function TooltipPreview() {
  const { selectedProps } = useCodeBuilder()
  return (
    <VStack>
      <Tooltip
        content={(selectedProps.text as string) || 'Add tooltip text'}
        position={selectedProps.position as TooltipProps['position']}
      >
        <span
          className={css({
            color: 'page.text.inverse',
            transition: 'color',
            transitionDuration: 'fast',
            _hover: {
              color: 'page.surface.inverse',
            },
          })}
        >
          <InformationFilled />
        </span>
      </Tooltip>

      <small
        className={css({
          textStyle: 'body-sm',
        })}
      >
        The icon color has been customized to see on this background
      </small>
    </VStack>
  )
}
