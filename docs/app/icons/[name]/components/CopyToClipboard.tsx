'use client'

import { css } from '@cerberus/styled-system/css'
import { Copy } from '@cerberus-design/icons'
import { Show } from '@cerberus-design/react'
import { useEffect, useState } from 'react'

interface CopyToClipboardProps {
  componentName: string
}

export default function CopyToClipboard(props: CopyToClipboardProps) {
  const [copied, setCopied] = useState<boolean>(false)

  function handleCopy() {
    navigator.clipboard.writeText(`<${props.componentName} />`)
    setCopied(true)
  }

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [copied])

  return (
    <button
      className={css({
        alignItems: 'center',
        appearance: 'none',
        display: 'inline-flex',
        bg: 'action.bg.initial',
        border: 'none',
        color: 'action.text.initial',
        gap: '2',
        h: '3.3rem',
        pxi: '6',
        rounded: 'full',
        transition: 'background-color 0.2s ease-in-out',
        '&:hover': {
          bg: 'action.bg.hover',
        },
      })}
      onClick={handleCopy}
      type="button"
    >
      <Copy
        className={css({
          opacity: '0.5',
        })}
      />
      <Show when={copied} fallback={<>Copy JSX</>}>
        Copied!
      </Show>
    </button>
  )
}
