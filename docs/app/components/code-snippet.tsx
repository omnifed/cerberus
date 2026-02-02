import { PropsWithChildren } from 'react'
import { CollapsibleCode } from './code-preview/collapsible-code'
import { getCodeString } from './code-preview/helpers'

interface Props {
  snippet: string
}

export async function CodeSnippet(props: PropsWithChildren<Props>) {
  const content = await getCodeString(props.snippet)
  return <CollapsibleCode code={content} />
}
