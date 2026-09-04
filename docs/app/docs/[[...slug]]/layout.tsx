import { ReactNode, Suspense } from 'react'

export default function DocsSlugLayout({ children }: { children: ReactNode }) {
  return <Suspense>{children}</Suspense>
}
