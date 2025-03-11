'use client'

import { Checkmark, Copy } from '@carbon/icons-react'
import { IconButton, Show, type IconButtonProps } from '@cerberus-design/react'
import { css } from 'styled-system/css'
import { useCallback, useState, type MouseEvent } from 'react'

interface CopyButtonProps extends Omit<IconButtonProps, 'ariaLabel'> {
  content: string
}

export function CopyButton(props: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      navigator.clipboard.writeText(props.content)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    },
    [props.content],
  )

  return (
    <IconButton
      {...props}
      ariaLabel={isCopied ? 'Copied!' : 'Copy code'}
      onClick={handleClick}
      usage="ghost"
    >
      <Show when={isCopied} fallback={<Copy />}>
        <span
          className={css({
            color: 'success.bg.initial',
          })}
        >
          <Checkmark />
        </span>
      </Show>
    </IconButton>
  )
}
