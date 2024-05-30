import { describe, test, expect } from 'bun:test'
import { createNavTriggerProps } from '@cerberus-design/react'

describe('navMenu aria helpers', () => {
  test('should export trigger helpers', () => {
    expect(createNavTriggerProps).toBeFunction()
  })

  test('should return an object with aria-controls and aria-expanded', () => {
    const values = {
      controls: 'menu',
      expanded: false,
    }

    expect(createNavTriggerProps(values)).toEqual({
      'aria-controls': 'menu',
      'aria-expanded': false,
    })
  })
})
