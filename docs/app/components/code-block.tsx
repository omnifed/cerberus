import { HStack } from '@/styled-system/jsx'
import { Terminal } from '@carbon/icons-react'
import { Show } from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'
import { codeToHtml } from 'shiki'
import { CopyButton } from './copy-button'
import { getShikiOptions } from '../lib/shiki'

interface CodeBlockProps {
  content: string
  language?: string
}

export async function CodeBlock(props: CodeBlockProps) {
  const out = await codeToHtml(
    props.content,
    getShikiOptions(props.language ?? ''),
  )

  return (
    <div
      className={css({
        my: 'md',
      })}
    >
      <Show when={props.language === 'sh'}>
        <HStack justify="space-between" w="full">
          <HStack textStyle="body-sm">
            <span
              className={css({
                color: 'page.text.100',
              })}
            >
              <Terminal />
            </span>
            Terminal
          </HStack>
          <CopyButton content={props.content} />
        </HStack>
      </Show>
      <div dangerouslySetInnerHTML={{ __html: out }} />
    </div>
  )
}
