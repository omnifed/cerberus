import type { PropsWithChildren } from 'react'

export interface RouteProps extends PropsWithChildren {
  params: Promise<{
    slug: string
  }>
}
