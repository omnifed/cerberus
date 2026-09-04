'use client'

import { CerberusProvider } from '@cerberus-design/react'
import type { PropsWithChildren } from 'react'

/**
 * This module provides a Cerberus configuration component which has to be used
 * in a client abstraction because of R19 rules around data passing into props.
 */

export default function CerberusConfig(props: PropsWithChildren<{}>) {
  return <CerberusProvider>{props.children}</CerberusProvider>
}
