import { describeDXContract } from '@/test-utils/dx-harness'
import { Avatar } from '@cerberus-design/react/avatar'

describeDXContract({
  name: 'Avatar',
  Root: Avatar,
  defaultRootProps: { fallback: <p>FB</p> },

  primitiveTestNode: (
    <Avatar.Root>
      <Avatar.Fallback>FB</Avatar.Fallback>
      <Avatar.Image data-testid="primitive-content" />
    </Avatar.Root>
  ),

  abstractions: [
    {
      name: 'AvatarEl',
      Component: Avatar.El,
      defaultProps: { fallback: 'Content body', src: null },
      children: null,
      testSlot: 'fallback',
      testSlotProp: 'image',
    },
  ],
})
