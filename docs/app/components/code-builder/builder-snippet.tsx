'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useCodeBuilder } from '@/app/context/code-builder'
import { useMemo, type PropsWithChildren } from 'react'
import { css } from '@cerberus/styled-system/css'

function isFormState(key: string) {
  return ['disabled', 'required', 'readOnly', 'invalid', 'mixed'].includes(key)
}

function isProgressKey(key: string) {
  return ['now'].includes(key)
}

function isChildContent(key: string) {
  return ['text', 'helpText', 'label'].includes(key)
}

interface BuilderSnippetProps {
  code: string
}

export default function BuilderSnippet(
  props: PropsWithChildren<BuilderSnippetProps>,
) {
  const { selectedProps } = useCodeBuilder()
  const code = useMemo(() => {
    return props.code.replace(/{{([^}]+)}}/g, (_, key): string => {
      if (isChildContent(key)) {
        return (selectedProps[key as keyof typeof selectedProps] ||
          'Add Text') as string
      }
      if (isFormState(key) || isProgressKey(key)) {
        return `{${selectedProps[key as keyof typeof selectedProps] || 'false'}}`
      }
      return `"${selectedProps[key as keyof typeof selectedProps] || 'false'}"`
    })
  }, [props.code, selectedProps])

  return (
    <SyntaxHighlighter
      className={css({
        rounded: 'xl',
        '& :is(.linenumber)': {
          color: '#4b6479',
          borderInlineEnd: '1px solid',
          borderInlineEndColor: '#272B3B',
          marginInlineEnd: '4',
        },
      })}
      language="typescript"
      showLineNumbers
      style={nightOwl}
    >
      {code}
    </SyntaxHighlighter>
  )
}
