'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useCodeBuilder } from '@/app/context/code-builder'
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type MouseEvent,
  type PropsWithChildren,
} from 'react'
import { css } from '@cerberus/styled-system/css'
import { Button, Show } from '@cerberus-design/react'
import { Checkmark, Copy } from '@cerberus-design/icons'

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
  const [copied, setCopied] = useState<boolean>(false)

  const code = useMemo(() => {
    return props.code.replace(/{{([^}]+)}}/g, (_, key): string => {
      if (isChildContent(key)) {
        return (selectedProps[key as keyof typeof selectedProps] ||
          'Add Text') as string
      }
      if (isFormState(key) || isProgressKey(key)) {
        return `{${selectedProps[key as keyof typeof selectedProps] || 'false'}}`
      }
      return `"${selectedProps[key as keyof typeof selectedProps] || ''}"`
    })
  }, [props.code, selectedProps])

  const handleCopy = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigator.clipboard.writeText(e.currentTarget.value)
    setCopied(true)
  }, [])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <div
      className={css({
        position: 'relative',
      })}
    >
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
        language="typescript"
        showLineNumbers
        style={nightOwl}
      >
        {code}
      </SyntaxHighlighter>

      <div
        className={css({
          position: 'absolute',
          right: 4,
          top: 4,
          zIndex: 'decorator',
        })}
      >
        <Button disabled={copied} size="sm" onClick={handleCopy} value={code}>
          <Show
            when={!copied}
            fallback={
              <>
                <Checkmark />
                Copied
              </>
            }
          >
            <Copy />
            Copy
          </Show>
        </Button>
      </div>
    </div>
  )
}
