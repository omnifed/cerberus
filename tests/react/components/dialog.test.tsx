import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Button,
  CerberusProvider,
  Dialog,
  Portal,
  useDialog,
  type OpenChangeDetails,
} from '@cerberus-design/react'
import { makeConfig, user } from '@/utils'

describe('Dialog', () => {
  const config = makeConfig()

  test('should render closed by default', () => {
    render(
      <CerberusProvider config={config}>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>Open Dialog</Button>
          </Dialog.Trigger>
          <Dialog>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <Dialog.CloseIconTrigger />
          </Dialog>
        </Dialog.Root>
      </CerberusProvider>,
    )

    expect(screen.getByText(/open dialog/i)).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  test('should open from an asChild trigger and render the abstraction parts', async () => {
    const details: OpenChangeDetails[] = []
    render(
      <CerberusProvider config={config}>
        <Dialog.Root onOpenChange={(d: OpenChangeDetails) => details.push(d)}>
          <Dialog.Trigger asChild>
            <Button>Open Dialog</Button>
          </Dialog.Trigger>
          <Dialog>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <Dialog.CloseIconTrigger />
          </Dialog>
        </Dialog.Root>
      </CerberusProvider>,
    )

    const trigger = screen.getByRole('button', { name: /open dialog/i })
    // asChild merges the Ark trigger props and the recipe slot onto the Button
    expect(trigger).toHaveAttribute('data-scope', 'dialog')
    expect(trigger).toHaveAttribute('data-part', 'trigger')
    expect(trigger.tagName).toBe('BUTTON')

    await user.click(trigger)

    const dialog = screen.getByRole('dialog', { name: /dialog title/i })
    expect(dialog).toHaveAccessibleDescription(/dialog description/i)
    expect(dialog).toHaveAttribute('data-part', 'content')
    expect(dialog.className).toContain('dialog__content')
    expect(document.querySelector('[data-part="backdrop"]')).toBeInTheDocument()
    expect(dialog.closest('[data-part="positioner"]')?.className).toContain(
      'dialog__positioner',
    )
    expect(details).toEqual([{ open: true }])
  })

  test('should open from a trigger without asChild', async () => {
    render(
      <CerberusProvider config={config}>
        <Dialog.Root>
          <Dialog.Trigger>Open</Dialog.Trigger>
          <Dialog>
            <Dialog.Title>Plain trigger</Dialog.Title>
          </Dialog>
        </Dialog.Root>
      </CerberusProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'Open' }))
    expect(
      screen.getByRole('dialog', { name: /plain trigger/i }),
    ).toBeInTheDocument()
  })

  test('should close from the CloseIconTrigger', async () => {
    render(
      <CerberusProvider config={config}>
        <Dialog.Root defaultOpen>
          <Dialog>
            <Dialog.Title>Closable</Dialog.Title>
            <Dialog.CloseIconTrigger />
          </Dialog>
        </Dialog.Root>
      </CerberusProvider>,
    )

    const close = screen.getByRole('button', { name: /close dialog/i })
    expect(close).toHaveAttribute('data-part', 'close-trigger')
    expect(close.className).toContain('dialog__closeTrigger')
    expect(close.querySelector('svg')).toBeInTheDocument()

    await user.click(close)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  test('should render CloseIconTrigger children in place of the icon', () => {
    render(
      <CerberusProvider config={config}>
        <Dialog.Root defaultOpen>
          <Dialog>
            <Dialog.Title>Custom icon</Dialog.Title>
            <Dialog.CloseIconTrigger>
              <span data-testid="custom-icon" />
            </Dialog.CloseIconTrigger>
          </Dialog>
        </Dialog.Root>
      </CerberusProvider>,
    )

    const close = screen.getByRole('button', { name: /close dialog/i })
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    expect(close.querySelector('svg')).not.toBeInTheDocument()
  })

  test('should apply the size variant from Root', () => {
    render(
      <CerberusProvider config={config}>
        <Dialog.Root defaultOpen size="sm">
          <Dialog>
            <Dialog.Title>Small</Dialog.Title>
          </Dialog>
        </Dialog.Root>
      </CerberusProvider>,
    )

    expect(screen.getByRole('dialog').className).toContain(
      'dialog__content--size_sm',
    )
  })

  test('should patch Backdrop and Positioner props from direct children', () => {
    render(
      <CerberusProvider config={config}>
        <Dialog.Root defaultOpen>
          <Dialog data-testid="content">
            <Dialog.Backdrop data-testid="backdrop" />
            <Dialog.Positioner data-testid="positioner" />
            <Dialog.Title>Overrides</Dialog.Title>
          </Dialog>
        </Dialog.Root>
      </CerberusProvider>,
    )

    const content = screen.getByTestId('content')
    expect(screen.getByTestId('backdrop')).toHaveAttribute(
      'data-part',
      'backdrop',
    )
    expect(screen.getByTestId('positioner')).toContainElement(content)
    expect(content).toHaveTextContent('Overrides')
  })

  test('should compose the primitives and expose Context', async () => {
    render(
      <CerberusProvider config={config}>
        <Dialog.Root>
          <Dialog.Trigger>Open</Dialog.Trigger>
          <Dialog.Context>
            {(dialog) => <p>state: {dialog.open ? 'open' : 'closed'}</p>}
          </Dialog.Context>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Title>Primitives</Dialog.Title>
                <Dialog.CloseTrigger>Cancel</Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </CerberusProvider>,
    )

    expect(screen.getByText('state: closed')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Open' }))
    expect(screen.getByText('state: open')).toBeInTheDocument()
    expect(
      screen.getByRole('dialog', { name: /primitives/i }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  test('should provide the recipe from RootProvider driven by useDialog', async () => {
    function Controlled() {
      const dialog = useDialog()
      return (
        <>
          <Button onClick={() => dialog.setOpen(true)}>External</Button>
          <Dialog.RootProvider value={dialog} size="xs">
            <Dialog>
              <Dialog.Title>Controlled externally</Dialog.Title>
            </Dialog>
          </Dialog.RootProvider>
        </>
      )
    }

    render(
      <CerberusProvider config={config}>
        <Controlled />
      </CerberusProvider>,
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /external/i }))
    expect(
      screen.getByRole('dialog', { name: /controlled externally/i }).className,
    ).toContain('dialog__content--size_xs')
  })
})
