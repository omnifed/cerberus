import { Box } from '@/styled-system/jsx'
import { cacheLife } from 'next/cache'
import { PropsWithChildren } from 'react'

export default async function Layout(props: PropsWithChildren<object>) {
  'use cache'
  cacheLife('hours')

  return (
    <>
      {props.children}

      <Box
        bgGradient="to-tr"
        gradientFrom="page.surface.initial"
        gradientTo="transparent"
        pos="fixed"
        top="0"
        left="0"
        h="full"
        w="full"
        zIndex="-9"
      />
    </>
  )
}
