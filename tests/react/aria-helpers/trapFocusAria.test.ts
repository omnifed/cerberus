import { describe, test, expect } from 'bun:test'
import { trapFocus } from '@cerberus-design/react'

// This is tested in the confirm-modal.test.tsx file

describe('trapFocus aria helpers', () => {
  test('should export trapFocus', () => {
    expect(trapFocus).toBeFunction()
  })

  test('should return a function to handleKeyDown', () => {
    const modalRef = { current: document.createElement('dialog') }
    const handleKeyDown = trapFocus(modalRef)
    expect(handleKeyDown).toBeFunction()
  })
})
