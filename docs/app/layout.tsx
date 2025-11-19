import type { Metadata } from 'next'
import { Suspense, type PropsWithChildren } from 'react'
import { cerberus, NotificationCenter } from '@cerberus-design/react'
import { base, openGraph } from './shared-metadata'
import { Nav } from './components/Nav'
import CerberusConfig from './context/cerberus-config'

import './globals.css'
import { CachedHTML } from './components/shared/html.cached'

export const metadata: Metadata = {
  title: 'Cerberus Design System',
  ...base,
  openGraph,
}

interface RootProps {}

export default async function RootLayout(props: PropsWithChildren<RootProps>) {
  return (
    <Suspense>
      <CachedHTML>
        <CerberusConfig>
          <Nav />

          <cerberus.main role="main" css={{ h: 'full', w: 'full' }}>
            {props.children}
          </cerberus.main>

          <NotificationCenter />
        </CerberusConfig>
      </CachedHTML>
    </Suspense>
  )
}
