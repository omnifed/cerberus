import { SceneMatcher } from '@/components/scenes/scene-matcher'
import { SiteFooter } from '@/components/site-footer'
import { Box } from '@/styled-system/jsx'
import { PropsWithChildren } from 'react'

export default async function Layout(props: PropsWithChildren<object>) {
  return (
    <>
      <Box minW="48rem" py="6rem">
        {props.children}
      </Box>
      <SiteFooter />
      <SceneMatcher />
    </>
  )
}
