import { Dialog, DialogProvider, DialogTrigger } from '@cerberus-design/react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const HeavyComponent = dynamic(() => import('./heavy'))

export function DynamicDemo() {
  return (
    <DialogProvider lazyMount>
      <DialogTrigger>Open</DialogTrigger>
      <Dialog>
        <Suspense fallback={<div>Loading...</div>}>
          <HeavyComponent />
        </Suspense>
      </Dialog>
    </DialogProvider>
  )
}
