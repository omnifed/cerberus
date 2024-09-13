import { css } from '@cerberus-design/styled-system/css'
import type { PropsWithChildren } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface CodeProps {
  showLineNumbers?: boolean
  language?: string
}

export function Code(props: PropsWithChildren<CodeProps>) {
  return (
    <SyntaxHighlighter
      className={css({
        border: '3px solid',
        borderColor: '#272B3B',
        rounded: 'xl',
        '& :is(.linenumber)': {
          color: '#4b6479',
          borderInlineEnd: '1px solid',
          borderInlineEndColor: '#272B3B',
          marginInlineEnd: '4',
        },
      })}
      language={props.language ?? 'typescript'}
      showLineNumbers={props.showLineNumbers}
      style={nightOwl}
    >
      {props.children}
    </SyntaxHighlighter>
  )
}
