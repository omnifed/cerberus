import { Accordion } from '@cerberus-design/react/accordion'
import { describeDXContract } from '../../test-utils/dx-harness'

describeDXContract({
  name: 'Accordion',
  Root: Accordion.Root,
  defaultRootProps: { defaultValue: ['item-1'] },

  primitiveTestNode: (
    <Accordion.Item value="item-1">
      <Accordion.ItemTrigger>Standard Heading</Accordion.ItemTrigger>
      <Accordion.ItemContent data-testid="primitive-content">
        Content body
      </Accordion.ItemContent>
    </Accordion.Item>
  ),

  abstractions: [
    {
      name: 'ItemGroup',
      Component: Accordion.ItemGroup,
      defaultProps: { value: 'item-1', heading: 'Standard Heading' },
      children: 'Content body',
      PartToPatch: Accordion.ItemTrigger,
      PartToReplace: Accordion.ItemIndicator,
    },
  ],
})
