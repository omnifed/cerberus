import { Show } from '@cerberus-design/react'
import { CodeBlock } from './code-block'

interface CodeProps {
  children: string
  language?: string
}

export function Code(props: CodeProps) {
  return (
    <Show when={Boolean(props.children.length)}>
      <CodeBlock language={props.language} content={props.children} />
    </Show>
  )
}
