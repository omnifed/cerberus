'use client'

import { createCerberusPrimitive, JsonTreeView } from '@cerberus-design/react'
import { ChevronRight } from '@carbon/icons-react'

const { withNoRecipe } = createCerberusPrimitive()
const Root = withNoRecipe(JsonTreeView.Root)
const Tree = withNoRecipe(JsonTreeView.Tree)

export const Basic = () => {
  return (
    <Root
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
      border="1px solid"
      borderColor="page.border.initial"
      p="md"
      w="3/4"
      css={{
        '& :is([data-part=branch-control])': {
          display: 'flex',
          color: 'page.text.100',
          gap: 'sm',
          w: 'full',
        },
        '& :is([data-part=branch-text])': {
          color: 'page.text.100',
          fontStyle: 'italic',
          fontSize: 'xs',
        },
        '& :is([data-part=item-text])': {
          color: 'success.text.100',
          ps: 'md',
          textStyle: 'mono-xs',
          fontSize: 'xs',
        },
      }}
    >
      <Tree arrow={<ChevronRight />} />
    </Root>
  )
}
