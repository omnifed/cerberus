'use client'

import { JsonTreeView } from '@cerberus-design/react'
import { ChevronRight } from '@carbon/icons-react'

export function ExpandDemo() {
  return (
    <JsonTreeView.Root
      defaultExpandedDepth={1}
      data={{
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        tags: ['tag1', 'tag2', 'tag3'],
        address: {
          street: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          zip: '12345',
        },
      }}
    >
      <JsonTreeView.Tree arrow={<ChevronRight />} />
    </JsonTreeView.Root>
  )
}
