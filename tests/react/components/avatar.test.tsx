import { afterEach, describe, expect, test } from 'bun:test'
import { cleanup, screen } from '@testing-library/react'
import { describeDXContract } from '@/test-utils/dx-harness'
import { render } from '@/test-utils/render'
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
      PartToPatch: Avatar.Image,
      PartToReplace: Avatar.Fallback,
    },
  ],
})

describe('Avatar part overrides', () => {
  afterEach(cleanup)

  test('Image and Fallback children override props and keep the default structure', () => {
    render(
      <Avatar fallback="unused">
        <Avatar.Fallback data-testid="fallback">CB</Avatar.Fallback>
        <Avatar.Image data-testid="image" alt="Cerberus" src="/logo.svg" />
      </Avatar>,
    )
    expect(screen.getByTestId('fallback')).toHaveTextContent('CB')
    expect(screen.queryByText('unused')).toBeNull()
    const image = screen.getByTestId('image')
    expect(image).toHaveAttribute('alt', 'Cerberus')
    expect(image).toHaveAttribute('src', '/logo.svg')
  })

  test('non-part children replace the default fallback and image', () => {
    render(
      <Avatar fallback="unused" data-testid="root">
        <span>Custom</span>
      </Avatar>,
    )
    const root = screen.getByTestId('root')
    expect(root).toHaveTextContent('Custom')
    expect(root.querySelector('[data-part="fallback"]')).toBeNull()
    expect(root.querySelector('[data-part="image"]')).toBeNull()
  })
})
