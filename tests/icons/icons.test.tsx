import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Accessibility, cerberusIcons, Checkmark } from '@cerberus-design/icons'
import { setupStrictMode } from '@/utils'

describe('Icons lib', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a checkmark icon', () => {
    render(<Checkmark role="img" />)
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeTruthy()
  })

  test('should render an accessibility icon', () => {
    render(<Accessibility role="img" />)
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeTruthy()
  })

  test('should provide a cerberusIcons object', () => {
    expect(cerberusIcons).toBeTruthy()
    expect(cerberusIcons).toHaveProperty('accordionIndicator')
    expect(cerberusIcons).toHaveProperty('avatar')
    expect(cerberusIcons).toHaveProperty('calendar')
    expect(cerberusIcons).toHaveProperty('calendarPrev')
    expect(cerberusIcons).toHaveProperty('calendarNext')
    expect(cerberusIcons).toHaveProperty('close')
    expect(cerberusIcons).toHaveProperty('confirmModal')
    expect(cerberusIcons).toHaveProperty('delete')
    expect(cerberusIcons).toHaveProperty('promptModal')
    expect(cerberusIcons).toHaveProperty('waitingFileUploader')
    expect(cerberusIcons).toHaveProperty('infoNotification')
    expect(cerberusIcons).toHaveProperty('successNotification')
    expect(cerberusIcons).toHaveProperty('warningNotification')
    expect(cerberusIcons).toHaveProperty('dangerNotification')
    expect(cerberusIcons).toHaveProperty('invalid')
    expect(cerberusIcons).toHaveProperty('invalidAlt')
    expect(cerberusIcons).toHaveProperty('redo')
    expect(cerberusIcons).toHaveProperty('selectArrow')
    expect(cerberusIcons).toHaveProperty('toggleChecked')
  })
})
