import type { PropsWithChildren } from 'react'

declare global {
  export interface RouteProps extends PropsWithChildren {
    params: Promise<{
      slug: string
    }>
  }
}
