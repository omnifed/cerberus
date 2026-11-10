import { describeDXContract } from '@/test-utils/dx-harness'
import { Avatar } from '@cerberus-design/react/avatar'

describeDXContract({
  name: 'Avatar',
  Root: Avatar,
  defaultRootProps: { fallback: <p>CB</p> },

  primitiveTestNode: (
    <Avatar.Root>
      <Avatar.Fallback>Standard Heading</Avatar.Fallback>
      <Avatar.Image data-testid="primitive-content" src="" />
    </Avatar.Root>
  ),

  abstractions: [
    {
      name: 'AvatarEl',
      Component: Avatar.El,
      defaultProps: { fallback: 'FB', src: '' },
      children: null,
      testSlot: 'fallback',
      testSlotProp: 'image',
    },
  ],
})
