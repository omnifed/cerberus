'use client'

import { DialogCloseTrigger } from '@cerberus-design/react'
import { useRead, useStore } from '@cerberus-design/signals'
import { type MouseEvent, type PropsWithChildren } from 'react'
import { StyledLink } from './results'
import { searchStore, SearchStore } from './store'

type Props = {
  href: string
  linkProps?: any
}

export function ResultRow(props: PropsWithChildren<Props>) {
  const store = useStore<SearchStore>(searchStore)

  const absoluteUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${props.href}`
      : props.href
  const _isCopied = useRead(store.copiedUrl) === absoluteUrl

  const _handleCopy = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(absoluteUrl).then(() => {
      store.setCopiedUrl(absoluteUrl)
      setTimeout(() => store.setCopiedUrl(null), 2000)
    })
  }

  const _handleShare = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (navigator.share) {
      navigator.share({ url: absoluteUrl }).catch(() => {})
    }
  }

  const _canShare = typeof navigator !== 'undefined' && !!navigator.share

  return (
    <DialogCloseTrigger asChild>
      <StyledLink data-search-item href={props.href} w="full" {...props.linkProps}>
        {props.children}
      </StyledLink>
    </DialogCloseTrigger>
  )
}

// <Box
//   className="share-action"
//   pos="absolute"
//   right="md"
//   top="50%"
//   transform="translateY(-50%)"
//   opacity="0"
//   pointerEvents="none"
//   transition="opacity 0.2s"
//   zIndex="1"
// >
//   {canShare ? (
//     <Menu>
//       <MenuTrigger asChild>
//         <IconButton
//           clipboard
//           size="sm"
//           shape="circle"
//           usage="ghost"
//           onClick={(e) => {
//             e.preventDefault()
//             e.stopPropagation()
//           }}
//         >
//           {isCopied ? (
//             <Checkmark
//               style={{ color: 'var(--cerberus-colors-success-icon-initial)' }}
//             />
//           ) : (
//             <Share />
//           )}
//         </IconButton>
//       </MenuTrigger>
//       <MenuContent>
//         <MenuItem value="copy" onClick={handleCopy}>
//           <Copy /> Copy Link
//         </MenuItem>
//         <MenuItem value="share" onClick={handleShare}>
//           <Share /> Share to...
//         </MenuItem>
//       </MenuContent>
//     </Menu>
//   ) : (
//     <IconButton
//       clipboard
//       size="sm"
//       usage="ghost"
//       shape="circle"
//       onClick={handleCopy}
//     >
//       {isCopied ? (
//         <Checkmark
//           style={{ color: 'var(--cerberus-colors-success-icon-initial)' }}
//         />
//       ) : (
//         <Copy />
//       )}
//     </IconButton>
//   )}
// </Box>
