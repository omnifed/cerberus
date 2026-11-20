import { afterEach, describe, test, expect } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Group, Button, type GroupProps } from '@cerberus-design/react'
import { Group as GroupSubpath } from '@cerberus-design/react/group'

describe('Group', () => {
  afterEach(cleanup)

  const buttons = [
    <Button key="one">one</Button>,
    <Button key="two">two</Button>,
    <Button key="three">three</Button>,
  ]

  function renderGroup(props: GroupProps = {}) {
    render(
      <Group data-testid="group" {...props}>
        {buttons}
      </Group>,
    )
    return screen.getByTestId('group')
  }

  test('renders a group', () => {
    render(<Group>{buttons}</Group>)
    expect(screen.getByText(/one/i)).toBeInTheDocument()
    expect(screen.getByText(/two/i)).toBeInTheDocument()
    expect(screen.getByText(/three/i)).toBeInTheDocument()
  })

  test('renders a div with the default recipe classes and data attributes', () => {
    const group = renderGroup()
    expect(group.tagName).toBe('DIV')
    expect(group).toHaveClass(
      'cerberus-group',
      'cerberus-group--orientation_horizontal',
      'cerberus-group--layout_default',
    )
    expect(group).toHaveAttribute('data-scope', 'group')
    expect(group).toHaveAttribute('data-part', 'root')
  })

  test('Group.Root is the same primitive as Group', () => {
    expect(Group.Root).toBe(Group)
    expect(GroupSubpath).toBe(Group)
    render(<Group.Root data-testid="root">{buttons}</Group.Root>)
    expect(screen.getByTestId('root')).toHaveClass('cerberus-group')
  })

  test.each(['default', 'attached', 'grow', 'stack'] as const)(
    'supports the %s layout',
    (layout) => {
      const group = renderGroup({ layout })
      expect(group).toHaveClass(`cerberus-group--layout_${layout}`)
      expect(group.getAttribute('layout')).toBeNull()
    },
  )

  test.each(['horizontal', 'vertical'] as const)(
    'supports the %s orientation',
    (orientation) => {
      const group = renderGroup({ orientation })
      expect(group).toHaveClass(`cerberus-group--orientation_${orientation}`)
      expect(group.getAttribute('orientation')).toBeNull()
    },
  )

  test('it allows style props', () => {
    const group = renderGroup({ bgColor: 'black' })
    expect(group).toHaveClass('cerberus-bg-c_black')
  })

  test('it allows the css prop', () => {
    const group = renderGroup({ css: { w: 'full' } })
    expect(group).toHaveClass('cerberus-w_full')
  })

  test('it allows overriding the data attributes', () => {
    const group = renderGroup({ 'data-scope': 'custom' } as GroupProps)
    expect(group).toHaveAttribute('data-scope', 'custom')
  })

  test('it allows asChild', () => {
    render(
      <Group asChild layout="attached">
        <ul>{buttons}</ul>
      </Group>,
    )
    const list = screen.getByRole('list')
    expect(list.tagName).toBe('UL')
    expect(list).toHaveClass(
      'cerberus-group',
      'cerberus-group--layout_attached',
    )
    expect(list).toHaveAttribute('data-scope', 'group')
  })
})
