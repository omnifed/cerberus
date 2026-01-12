import { cerberus, HStack } from 'styled-system/jsx'
import { Terminal } from '@carbon/icons-react'
import { Show } from '@cerberus-design/react'
import { getShikiOptions } from '@/lib/shiki'
import { css } from 'styled-system/css'
import { codeToHtml } from 'shiki'
import { CopyButton } from './copy-button'

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
    <cerberus.div my="md">
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

      <cerberus.div dangerouslySetInnerHTML={{ __html: out }} />
    </cerberus.div>
  )
}
