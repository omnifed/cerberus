'use client'

import { useCurrentHash } from '@/hooks/use-current-hash'
import { css } from '@/styled-system/css'
import { focusStates } from '@cerberus/panda-preset'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

type Props = {
  url: string
}

export function TocLink(props: PropsWithChildren<Props>) {
  const hash = useCurrentHash()
  return (
    <Link
      aria-current={hash === props.url ? 'page' : undefined}
      href={props.url as LinkProps<string>['href']}
      className={css({
        display: 'block',
        rounded: 'sm',
        textStyle: 'label-sm',
        textWrap: 'pretty',
        _hover: {
          textDecorationColor: 'action.navigation.hover',
          textDecoration: 'underline',
        },
        _currentPage: {
          color: 'action.navigation.visited',
          textDecorationColor: 'action.navigation.hover',
          textDecoration: 'underline',
        },
        _focusVisible: focusStates._focusVisible,
      })}
    >
      {props.children}
    </Link>
  )
}
