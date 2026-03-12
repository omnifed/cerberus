'use client'

import { CerberusProvider, makeSystemConfig } from '@cerberus-design/react'
import { PropsWithChildren } from 'react'

const config = makeSystemConfig()

export function ConfigDemo(props: PropsWithChildren) {
  return <CerberusProvider config={config}>{props.children}</CerberusProvider>
}
