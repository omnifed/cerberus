import seoConfig from '@/seo.config'
import { cerberus, NotificationCenter } from '@cerberus-design/react'
import { Metadata } from 'next'
import { Suspense, type PropsWithChildren } from 'react'
import { Nav } from './components/Nav'
import { CachedHTML } from './components/shared/html.cached'
import CerberusConfig from './context/cerberus-config'

import './globals.css'

export const metadata: Metadata = seoConfig

// Component

interface RootProps {}

export default async function RootLayout(props: PropsWithChildren<RootProps>) {
  return (
    <Suspense>
      <CachedHTML>
        <CerberusConfig>
          <Nav />

          <cerberus.main role="main" css={{ h: 'full', w: 'full' }}>
            <Suspense>{props.children}</Suspense>
          </cerberus.main>

          <NotificationCenter />
        </CerberusConfig>
      </CachedHTML>
    </Suspense>
  )
}
