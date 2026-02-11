import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Group, Button } from '@cerberus-design/react'

describe('Group', () => {
  const buttons = [
    <Button key="one">one</Button>,
    <Button key="two">two</Button>,
    <Button key="three">three</Button>,
  ]

  test('renders a group', () => {
    render(<Group>{buttons}</Group>)
    expect(screen.getByText(/one/i)).toBeInTheDocument()
    expect(screen.getByText(/two/i)).toBeInTheDocument()
    expect(screen.getByText(/three/i)).toBeInTheDocument()
  })

  test('it allows style props', () => {
    render(
      <Group bgColor="black" data-testid="group">
        {buttons}
      </Group>,
    )
    expect(screen.getByTestId('group')).toHaveClass('cerberus-bg-c_black')
  })

  test('it allows asChild', () => {
    render(
      <Group asChild>
        <ul>{buttons}</ul>
      </Group>,
    )
    expect(screen.getByRole('list')).toBeInTheDocument()
  })
})
