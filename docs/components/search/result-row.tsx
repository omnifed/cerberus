'use client'

import { HStack } from '@/styled-system/jsx'
import { DialogCloseTrigger } from '@cerberus-design/react'
import { useStore } from '@cerberus-design/signals'
import { type MouseEvent, type PropsWithChildren } from 'react'
import { CopyButton } from '../example/copy-button.client'
import { StyledLink } from './results'
import { searchStore, SearchStore } from './store'

type Props = {
  href: string
  linkProps?: any
}

export function ResultRow(props: PropsWithChildren<Props>) {
  const absoluteUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${props.href}`
      : props.href

  const store = useStore<SearchStore>(searchStore)

  const handleCopy = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(absoluteUrl).then(() => {
      store.setCopiedUrl(absoluteUrl)
      setTimeout(() => store.setCopiedUrl(null), 2000)
    })
  }

  const _canShare = typeof navigator !== 'undefined' && !!navigator.share

  return (
    <DialogCloseTrigger asChild>
      <StyledLink data-search-item href={props.href} w="full" {...props.linkProps}>
        <HStack justify="space-between" w="full">
          <HStack gap="sm">{props.children}</HStack>

          <CopyButton content={absoluteUrl} onClick={handleCopy} />
        </HStack>
      </StyledLink>
    </DialogCloseTrigger>
  )
}
