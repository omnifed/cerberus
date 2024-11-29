import { describe, test, expect, afterEach, beforeEach } from 'bun:test'
import { render, screen, cleanup } from '@testing-library/react'
import { Modal, useModal } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('useModal', () => {
  setupStrictMode()

  function Test() {
    const { modalRef, show, close, isOpen } = useModal()
    return (
      <div>
        <p>Modal state: {String(isOpen)}</p>
        <button onClick={show}>Show</button>
        <Modal ref={modalRef}>
          <p>Modal content</p>
          <button onClick={close}>Close</button>
        </Modal>
      </div>
    )
  }

  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(cleanup)

  test('should show modal', async () => {
    render(<Test />)
    expect(screen.getByText(/modal state: false/i)).toBeTruthy()
    expect(screen.queryByRole('dialog')).toBeFalsy()
    await userEvent.click(screen.getByText(/show/i))
    expect(screen.getByRole('dialog')).toBeTruthy()
    expect(screen.getByText(/modal state: true/i)).toBeTruthy()
  })

  test('should close modal', async () => {
    render(<Test />)
    expect(screen.getByText(/modal state: false/i)).toBeTruthy()
    await userEvent.click(screen.getByText(/show/i))
    expect(screen.getByRole('dialog')).toBeTruthy()
    expect(screen.getByText(/modal state: true/i)).toBeTruthy()
    await userEvent.click(screen.getByText(/close/i))
    expect(screen.queryByRole('dialog')).toBeFalsy()
    expect(screen.getByText(/modal state: false/i)).toBeTruthy()
  })
})
