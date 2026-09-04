import { SceneMatcher } from '@/components/scenes/scene-matcher'
import { Box } from '@/styled-system/jsx'
import { cacheLife } from 'next/cache'
import { Metadata } from 'next/types'
import { PropsWithChildren } from 'react'
import { getDocsMetadata } from '../docs/utils/helpers.server'

export const metadata: Metadata = getDocsMetadata()

export default async function Layout(props: PropsWithChildren<object>) {
  'use cache'
  cacheLife('hours')
  return (
    <>
      <Box py="6rem">{props.children}</Box>
      <SceneMatcher />
    </>
  )
}
