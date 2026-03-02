'use client'

import { CerberusProvider } from '@cerberus-design/react'
import { type PropsWithChildren } from 'react'

export function CerberusConfig(props: PropsWithChildren) {
  return <CerberusProvider>{props.children}</CerberusProvider>
}
