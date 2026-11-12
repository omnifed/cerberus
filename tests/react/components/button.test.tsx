import { describeDXContract } from '@/test-utils/dx-harness'
import { Corn } from '@carbon/icons-react'
import { Button } from '@cerberus-design/react/button'

describeDXContract({
  name: 'Button',
  Root: Button.Provider,

  primitiveTestNode: (
    <Button.Root data-testid="primitive-content" type="submit">
      <Button.Icon>
        <Corn />
      </Button.Icon>
    </Button.Root>
  ),

  abstractions: [],
})
