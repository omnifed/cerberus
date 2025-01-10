import { describe, test, expect } from 'bun:test'
import {
  defineIcons,
  makeSystemConfig,
  type DefinedIcons,
} from '@cerberus-design/react'

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
