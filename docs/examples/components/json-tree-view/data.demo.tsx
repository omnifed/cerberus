'use client'

import { JsonTreeView } from '@cerberus-design/react'
import { ChevronRight } from '@carbon/icons-react'

const testArray = [1, 2, 3, 4, 5]
Object.defineProperties(testArray, {
  customProperty: { value: 'custom value', enumerable: false, writable: false },
  anotherProperty: { value: 42, enumerable: false, writable: false },
})

export function DataDemo() {
  return (
    <JsonTreeView.Root
      data={{
        normalArray: [1, 2, 3],
        arrayWithNonEnumerableProperties: testArray,
        sparseArray: (() => {
          const sparse = []
          sparse[0] = 'first'
          sparse[5] = 'sixth'
          return sparse
        })(),
      }}
    >
      <JsonTreeView.Tree arrow={<ChevronRight />} />
    </JsonTreeView.Root>
  )
}
