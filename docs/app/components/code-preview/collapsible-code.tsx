import { cerberus, Show } from '@cerberus-design/react'
import { PropsWithChildren } from 'react'
import { Scrollable } from 'styled-system/jsx'
import { ExampleCodeReturn } from './helpers'

interface Props {
  code: ExampleCodeReturn['code']
  fallback?: ExampleCodeReturn['fallback']
}

export async function CollapsibleCode(props: PropsWithChildren<Props>) {
  return (
    <>
      <Scrollable
        hideScrollbar
        maxH="xl"
        maxW="full"
        pos="relative"
        css={{
          '& :is(.expressive-code > .frame)': {
            '--header-border-radius': 0,
          },
        }}
      >
        <Show when={!props.fallback} fallback={props.code}>
          <cerberus.div dangerouslySetInnerHTML={{ __html: props.code }} />
        </Show>
      </Scrollable>
    </>
  )
}
