'use client'

import {
  CerberusProvider,
  defineIcons,
  makeSystemConfig,
} from '@cerberus-design/react'
import { ChevronDown } from '@carbon/icons-react'
import type { PropsWithChildren } from 'react'

const icons = defineIcons({
  // Add a different icon for the accordion indicator
  accordionIndicator: ChevronDown,
})

const config = makeSystemConfig({
  icons,
})

export default function CerberusConfig(props: PropsWithChildren<{}>) {
  return <CerberusProvider config={config}>{props.children}</CerberusProvider>
}
