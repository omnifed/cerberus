import { cerberus } from '@cerberus-design/react'
import { PropsWithChildren } from 'react'
import { getCodeString } from './code-preview/helpers'

interface Props {
  snippet: string
}

export async function CodeSnippet(props: PropsWithChildren<Props>) {
  const content = await getCodeString(props.snippet)
  return <cerberus.div dangerouslySetInnerHTML={{ __html: content }} />
}
