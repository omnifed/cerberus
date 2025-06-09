'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import type { PropsWithChildren, ReactNode } from 'react'
import { VStack } from '@/styled-system/jsx'
import { Text } from '@cerberus-design/react'
import { css } from '@/styled-system/css'

interface LinkItemProps {
  href: string
  icon: ReactNode
}

export function LinkItem(props: PropsWithChildren<LinkItemProps>) {
  const pathname = usePathname()

  function isCurrentPage(): boolean {
    return props.href.includes(pathname) || pathname.includes(props.href)
  }

  return (
    <Link
      aria-current={isCurrentPage() ? 'page' : undefined}
      href={props.href as LinkProps<string>['href']}
      prefetch
      className={css({
        color: 'action.navigation.initial',
        h: '3.75rem',
        py: 'sm',
        rounded: 'md',
        transitionProperty: 'background-color,color',
        transitionDuration: 'fast',
        w: 'full',
        _hover: {
          bgColor: 'page.bg.100/55',
          color: 'action.navigation.hover',
        },
        _currentPage: {
          bgColor: 'page.bg.100',
          color: 'action.navigation.visited',
          _hover: {
            bgColor: 'page.bg.100',
            color: 'action.navigation.visited',
          },
        },
      })}
    >
      <VStack color="inherit" gap="1">
        {props.icon}
        <Text as="small" fontSize="0.75rem">
          {props.children}
        </Text>
      </VStack>
    </Link>
  )
}
