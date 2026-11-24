import { Dialog } from '@cerberus-design/react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const HeavyComponent = dynamic(() => import('./heavy'))

export function DynamicDemo() {
  return (
    <Dialog.Root lazyMount>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <Dialog>
        <Suspense fallback={<div>Loading...</div>}>
          <HeavyComponent />
        </Suspense>
      </Dialog>
    </Dialog.Root>
  )
}
