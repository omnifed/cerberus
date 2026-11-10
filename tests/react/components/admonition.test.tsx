import { describeDXContract } from '@/test-utils/dx-harness'
import { Corn } from '@carbon/icons-react'
import { Admonition } from '@cerberus-design/react/admonition'

describeDXContract({
  name: 'Admonition',
  Root: Admonition,
  defaultRootProps: {},

  primitiveTestNode: (
    <Admonition.Root>
      <Admonition.Indicator>
        <Corn />
      </Admonition.Indicator>
      <Admonition.Content data-testid="primitive-content">
        <Admonition.Heading>Standard Heading</Admonition.Heading>
        <Admonition.Description>Description body</Admonition.Description>
      </Admonition.Content>
    </Admonition.Root>
  ),

  abstractions: [
    {
      name: 'Admonition',
      Component: Admonition,
      defaultProps: { heading: 'Standard Heading' },
      children: 'Content body',
      testSlot: 'indicator',
      testSlotProp: 'heading',
    },
  ],
})
