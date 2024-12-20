import { describe, test, expect } from 'bun:test'
import {
  defineIcons,
  makeSystemConfig,
  type DefinedIcons,
} from '@cerberus-design/react'
import { cerberusIcons } from '@cerberus-design/icons'

describe('config helpers', () => {
  function TestIcon() {
    return <span aria-label="Test icon" />
  }

  test('defineIcons', () => {
    const icons = defineIcons({
      accordionIndicator: TestIcon,
    } as unknown as DefinedIcons)

    expect(icons.accordionIndicator).toBe(TestIcon)
    expect(icons.checkbox).toBeDefined()
    expect(icons.fileUploader).toBeDefined()
    expect(icons.indeterminate).toBeDefined
  })

  test('defineIcons with cerberusIcons', () => {
    const icons = defineIcons({
      ...cerberusIcons,
      accordionIndicator: TestIcon,
    })

    expect(icons.accordionIndicator).toBe(TestIcon)
    expect(icons.checkbox).toBeDefined()
    expect(icons.fileUploader).toBeDefined()
    expect(icons.indeterminate).toBeDefined()
    expect(icons.avatar).toBe(cerberusIcons.avatar)
    expect(icons.calendar).toBe(cerberusIcons.calendar)
    expect(icons.calendarPrev).toBe(cerberusIcons.calendarPrev)
    expect(icons.calendarNext).toBe(cerberusIcons.calendarNext)
    expect(icons.close).toBe(cerberusIcons.close)
    expect(icons.confirmModal).toBe(cerberusIcons.confirmModal)
    expect(icons.delete).toBe(cerberusIcons.delete)
    expect(icons.promptModal).toBe(cerberusIcons.promptModal)
    expect(icons.waitingFileUploader).toBe(cerberusIcons.waitingFileUploader)
    expect(icons.infoNotification).toBe(cerberusIcons.infoNotification)
    expect(icons.successNotification).toBe(cerberusIcons.successNotification)
    expect(icons.warningNotification).toBe(cerberusIcons.warningNotification)
    expect(icons.dangerNotification).toBe(cerberusIcons.dangerNotification)
    expect(icons.invalid).toBe(cerberusIcons.invalid)
    expect(icons.invalidAlt).toBe(cerberusIcons.invalidAlt)
    expect(icons.redo).toBe(cerberusIcons.redo)
    expect(icons.selectArrow).toBe(cerberusIcons.selectArrow)
    expect(icons.toggleChecked).toBe(cerberusIcons.toggleChecked)
  })

  test('makeSystemConfig', () => {
    const icons = defineIcons({
      accordionIndicator: TestIcon,
    } as unknown as DefinedIcons)
    const config = makeSystemConfig({
      icons,
    })
    expect(config.icons).toBeDefined()
    expect(config.icons?.accordionIndicator).toBe(TestIcon)
    expect(config.icons?.checkbox).toBeDefined()
    expect(config.icons?.fileUploader).toBeDefined()
    expect(config.icons?.indeterminate).toBeDefined()
  })
})
