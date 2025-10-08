import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Clipboard,
  ClipboardRoot,
  ClipboardLabel,
  ClipboardControl,
  ClipboardInput,
  ClipboardTrigger,
  ClipboardIndicator,
} from '@cerberus-design/react'

describe('Clipboard', () => {
  test('should render a clipboard element', async () => {
    render(
      <ClipboardRoot value="Hello, World!">
        <ClipboardLabel>Copy this text</ClipboardLabel>
        <ClipboardControl>
          <ClipboardInput />
          <ClipboardTrigger>
            <ClipboardIndicator />
          </ClipboardTrigger>
        </ClipboardControl>
      </ClipboardRoot>,
    )
    expect(screen.getByText(/copy this text/i)).toBeInTheDocument()
    expect(screen.getByDisplayValue(/hello, world!/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should allow passing Cerberus factory props to all parts', () => {
    render(
      <Clipboard.Root
        data-testid="root"
        value="Hello, World!"
        marginTop="large"
      >
        <Clipboard.Label data-testid="label" color="action.text.100">
          Copy this text
        </Clipboard.Label>
        <Clipboard.Control>
          <Clipboard.Input data-testid="input" w="full" />
          <Clipboard.Trigger data-testid="trigger" color="action.text.200">
            <Clipboard.Indicator data-testid="indicator" />
            <Clipboard.CopyText data-testid="copy-text" />
          </Clipboard.Trigger>
        </Clipboard.Control>
      </Clipboard.Root>,
    )
    expect(screen.getByTestId('root')).toHaveClass('cerberus-mt_large')
    expect(screen.getByTestId('label')).toHaveClass(
      'cerberus-c_action.text.100',
    )
    expect(screen.getByTestId('input')).toHaveClass('cerberus-w_full')
    expect(screen.getByTestId('trigger')).toHaveClass(
      'cerberus-c_action.text.200',
    )
    expect(screen.getByTestId('indicator')).toBeInTheDocument()
    expect(screen.getByTestId('copy-text')).toBeInTheDocument()
  })
})
