import { MetaProvider } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import { GlobalNav } from '~/components/shared/global-nav'

import './app.css'

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <GlobalNav />

          <main role="main">
            <Suspense>{props.children}</Suspense>
          </main>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
