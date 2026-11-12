import { describeDXContract } from '@/test-utils/dx-harness'
import { Corn } from '@carbon/icons-react'
import { Button } from '@cerberus-design/react/button'

describeDXContract({
  name: 'Button',
  Root: Button,

  primitiveTestNode: (
    <Button.Group>
      <Button.Root type="submit">
        <Button.Indicator>
          <Corn />
        </Button.Indicator>
      </Button.Root>
    </Button.Group>
  ),

  abstractions: [
    {
      name: 'ButtonEl',
      Component: Button,
      defaultProps: { type: 'submit' },
      children: 'Content body',
      testSlot: 'indicator',
      testSlotProp: 'group',
    },
  ],
})
