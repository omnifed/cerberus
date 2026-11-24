import { CerberusProvider, makeSystemConfig } from '@cerberus-design/react'
import { render as rtlRender } from '@testing-library/react'
import type { RenderResult } from '@testing-library/react'
import type { PropsWithChildren, ReactNode } from 'react'

const config = makeSystemConfig()

function Wrapper(props: PropsWithChildren) {
  return <CerberusProvider config={config}>{props.children}</CerberusProvider>
}

export function render(ui: ReactNode): RenderResult {
  return rtlRender(<>{ui}</>, { wrapper: Wrapper })
}
