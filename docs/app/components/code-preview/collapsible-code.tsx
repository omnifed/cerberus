import { cerberus, Show } from '@cerberus-design/react'
import { Scrollable } from 'styled-system/jsx'
import { getExampleCode } from './helpers'
import { PropsWithChildren } from 'react'

interface Props {
  id: string
}

export async function CollapsibleCode(props: PropsWithChildren<Props>) {
  const code = await getExampleCode(props.id)

  return (
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
      <Show
        when={props.children}
        fallback={<cerberus.div dangerouslySetInnerHTML={{ __html: code }} />}
      >
        {() => <>{props.children}</>}
      </Show>
    </Scrollable>
  )
}
