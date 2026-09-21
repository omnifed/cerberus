import { SceneMatcher } from '@/components/scenes/scene-matcher'
import { Box } from '@/styled-system/jsx'
import { PropsWithChildren } from 'react'

export default async function Layout(props: PropsWithChildren<object>) {
  return (
    <>
      <Box py="6rem">{props.children}</Box>
      <SceneMatcher />
    </>
  )
}
