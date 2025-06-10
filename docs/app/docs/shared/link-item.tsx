'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import type { PropsWithChildren, ReactNode } from 'react'
import { HStack, VStack } from '@/styled-system/jsx'
import { Text } from '@cerberus-design/react'
import { css, cx } from '@/styled-system/css'

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
      className={cx(
        'group',
        css({
          color: 'page.text.200',
          h: '3.75rem',
          py: 'sm',
          rounded: 'md',
          transitionProperty: 'background-color,color',
          transitionDuration: 'fast',
          w: 'full',
          _hover: {
            color: 'action.text.inverse',
          },
          _currentPage: {
            color: 'page.text.300',
            _hover: {
              color: 'page.text.200',
            },
          },
        }),
      )}
    >
      <VStack color="inherit" gap="1">
        <HStack
          justify="center"
          p="sm"
          transitionProperty="background-color,color"
          transitionDuration="fast"
          rounded="xl"
          w="3rem"
          _groupHover={{
            bgColor: 'action.ghost.hover',
          }}
          css={{
            '.group:is([aria-current=page]) &': {
              bgColor: 'action.ghost.active',
            },
          }}
        >
          {props.icon}
        </HStack>
        <Text as="small" color="inherit" fontSize="0.75rem">
          {props.children}
        </Text>
      </VStack>
    </Link>
  )
}
