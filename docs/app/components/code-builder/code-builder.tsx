import { type PropsWithChildren } from 'react'
import CodeBuilderProvider from '../../context/code-builder'
import type { BuilderResult } from './helpers'
import BuilderLayout from './builder-layout'

interface CodeBuilderProps {
  api: Record<string, BuilderResult>
  code?: string
}

export default function CodeBuilder(
  props: PropsWithChildren<CodeBuilderProps>,
) {
  return (
    <CodeBuilderProvider api={props.api}>
      <BuilderLayout api={props.api} code={props.code}>
        {props.children}
      </BuilderLayout>
    </CodeBuilderProvider>
  )
}
