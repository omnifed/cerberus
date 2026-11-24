'use client'

import { Checkmark, Copy, Share } from '@carbon/icons-react'
import { IconButton, Menu, Portal } from '@cerberus-design/react'
import { useRead, useStore } from '@cerberus-design/signals'
import { type MouseEvent } from 'react'
import { searchStore, SearchStore } from './store'

type Props = {
  absoluteUrl: string
  onCopy: (e: MouseEvent) => void
}

export function ShareMenu(props: Props) {
  const store = useStore<SearchStore>(searchStore)
  const isCopied = useRead(store.copiedUrl)

  const handleShare = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (navigator.share) {
      navigator.share({ url: props.absoluteUrl }).catch(() => {})
    }
  }

  return (
    <Menu lazyMount unmountOnExit>
      <Menu.Trigger asChild>
        <IconButton clipboard size="sm" shape="circle" usage="ghost">
          {isCopied ? (
            <Checkmark
              style={{ color: 'var(--cerberus-colors-success-icon-initial)' }}
            />
          ) : (
            <Share />
          )}
        </IconButton>
      </Menu.Trigger>

      <Portal>
        <Menu.ContentGroup>
          <Menu.Item value="copy" onClick={props.onCopy}>
            <Copy /> Copy Link
          </Menu.Item>
          <Menu.Item value="share" onClick={handleShare}>
            <Share /> Share to...
          </Menu.Item>
        </Menu.ContentGroup>
      </Portal>
    </Menu>
  )
}
