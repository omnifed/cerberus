import { describe, test, expect } from 'bun:test'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Clipboard, useClipboard } from '@cerberus-design/react'

describe('Clipboard', () => {
  test('should render a clipboard element', () => {
    render(
      <Clipboard value="Hello, World!">
        <Clipboard.Label>Copy this text</Clipboard.Label>
        <Clipboard.Control>
          <Clipboard.Input />
          <Clipboard.Trigger>
            <Clipboard.Indicator copied="Copied">Copy</Clipboard.Indicator>
          </Clipboard.Trigger>
        </Clipboard.Control>
      </Clipboard>,
    )
    expect(screen.getByText(/copy this text/i)).toBeInTheDocument()
    expect(screen.getByDisplayValue(/hello, world!/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Copy')).toBeInTheDocument()
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
        <Clipboard.Control data-testid="control" gap="sm">
          <Clipboard.Input data-testid="input" w="full" />
          <Clipboard.ValueText data-testid="value-text" fontSize="sm" />
          <Clipboard.Trigger data-testid="trigger" color="action.text.200">
            <Clipboard.Indicator data-testid="indicator" h="2em" />
            <Clipboard.CopyIndicator data-testid="copy-indicator" />
            <Clipboard.CopyText data-testid="copy-text" color="currentColor" />
          </Clipboard.Trigger>
        </Clipboard.Control>
      </Clipboard.Root>,
    )
    expect(screen.getByTestId('root')).toHaveClass('cerberus-mt_large')
    expect(screen.getByTestId('label')).toHaveClass(
      'cerberus-c_action.text.100',
    )
    expect(screen.getByTestId('control')).toHaveClass('cerberus-gap_sm')
    expect(screen.getByTestId('input')).toHaveClass('cerberus-w_full')
    expect(screen.getByTestId('value-text')).toHaveClass('cerberus-fs_sm')
    expect(screen.getByTestId('trigger')).toHaveClass(
      'cerberus-c_action.text.200',
    )
    expect(screen.getByTestId('indicator')).toHaveClass('cerberus-h_2em')
    expect(screen.getByTestId('copy-indicator')).toBeInTheDocument()
    expect(screen.getByTestId('copy-text')).toHaveClass(
      'cerberus-c_currentColor',
    )
  })

  test('should render the value with Clipboard.ValueText', () => {
    render(
      <Clipboard value="Hello, World!">
        <Clipboard.ValueText />
      </Clipboard>,
    )
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  test('should expose the state with Clipboard.Context', () => {
    render(
      <Clipboard value="Hello, World!">
        <Clipboard.Context>
          {(clipboard) => <span>value: {clipboard.value}</span>}
        </Clipboard.Context>
      </Clipboard>,
    )
    expect(screen.getByText('value: Hello, World!')).toBeInTheDocument()
  })

  test('should render a Clipboard.RootProvider driven by useClipboard', () => {
    function Demo() {
      const clipboard = useClipboard({ value: 'from the store' })
      return (
        <Clipboard.RootProvider data-testid="provider" value={clipboard} p="md">
          <Clipboard.ValueText />
        </Clipboard.RootProvider>
      )
    }
    render(<Demo />)
    expect(screen.getByTestId('provider')).toHaveClass('cerberus-p_md')
    expect(screen.getByText('from the store')).toBeInTheDocument()
  })

  test('Clipboard.CopyIndicator should render the default copy icon', () => {
    render(
      <Clipboard value="Hello, World!">
        <Clipboard.Trigger>
          <Clipboard.CopyIndicator data-testid="copy-indicator" />
        </Clipboard.Trigger>
      </Clipboard>,
    )
    const indicator = screen.getByTestId('copy-indicator')
    expect(indicator).toHaveClass('cerberus-h_1em', 'cerberus-w_1em')
    expect(indicator.querySelector('title')?.textContent).toBe('copy')
  })

  test('Clipboard.CopyIndicator should allow overriding the icons', () => {
    render(
      <Clipboard value="Hello, World!">
        <Clipboard.Trigger>
          <Clipboard.CopyIndicator data-testid="copy-indicator" h="2em">
            <span>custom icon</span>
          </Clipboard.CopyIndicator>
        </Clipboard.Trigger>
      </Clipboard>,
    )
    expect(screen.getByTestId('copy-indicator')).toHaveClass('cerberus-h_2em')
    expect(screen.getByText('custom icon')).toBeInTheDocument()
    expect(screen.queryByTitle('copy')).not.toBeInTheDocument()
  })

  test('Clipboard.CopyText should render the default text', () => {
    render(
      <Clipboard value="Hello, World!">
        <Clipboard.Trigger>
          <Clipboard.CopyText />
        </Clipboard.Trigger>
      </Clipboard>,
    )
    expect(screen.getByText('Copy')).toBeInTheDocument()
  })

  test('Clipboard.CopyText should show "Copied" after copying', async () => {
    render(
      <Clipboard value="Hello, World!">
        <Clipboard.Trigger>
          <Clipboard.CopyText />
        </Clipboard.Trigger>
      </Clipboard>,
    )
    await userEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByText('Copied')).toBeInTheDocument()
    })
  })

  test('Clipboard.CopyIndicator should swap the copy icon after copying', async () => {
    render(
      <Clipboard value="Hello, World!">
        <Clipboard.Trigger>
          <Clipboard.CopyIndicator data-testid="copy-indicator" />
        </Clipboard.Trigger>
      </Clipboard>,
    )
    await userEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(
        screen.getByTestId('copy-indicator').querySelector('title'),
      ).toBeNull()
    })
    expect(screen.getByTestId('copy-indicator').querySelector('svg')).not.toBe(
      null,
    )
  })

  test('Clipboard.CopyText should allow overriding the text', () => {
    render(
      <Clipboard value="Hello, World!">
        <Clipboard.Trigger>
          <Clipboard.CopyText>Copy link</Clipboard.CopyText>
        </Clipboard.Trigger>
      </Clipboard>,
    )
    expect(screen.getByText('Copy link')).toBeInTheDocument()
  })

  test('Clipboard.TriggerWithTooltip should render a trigger with a copy status tooltip', async () => {
    render(
      <Clipboard value="Hello, World!">
        <Clipboard.TriggerWithTooltip
          data-testid="trigger"
          aria-label="Copy to clipboard"
          color="action.text.200"
        >
          <Clipboard.CopyIndicator />
        </Clipboard.TriggerWithTooltip>
      </Clipboard>,
    )
    const trigger = screen.getByRole('button', { name: /copy to clipboard/i })
    expect(trigger).toHaveClass('cerberus-c_action.text.200')
    expect(trigger).toHaveAttribute('data-testid', 'trigger')

    await userEvent.hover(trigger)
    await waitFor(() => {
      expect(screen.getByText('Copy')).toBeInTheDocument()
    })
  })
})
