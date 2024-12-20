'use client'

import {
  CerberusProvider,
  defineIcons,
  makeSystemConfig,
} from '@cerberus-design/react'
import { cerberusIcons } from '@cerberus-design/icons'
import type { PropsWithChildren } from 'react'

/**
 * This module provides a Cerberus configuration component which has to be used
 * in a client abstraction because of R19 rules around data passing into props.
 */

const icons = defineIcons(cerberusIcons)

const config = makeSystemConfig({
  icons,
})

export default function CerberusConfig(props: PropsWithChildren<{}>) {
  return <CerberusProvider config={config}>{props.children}</CerberusProvider>
}
