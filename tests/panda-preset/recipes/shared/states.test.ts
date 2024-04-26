import { describe, test, expect } from 'bun:test'
import { formStates, focusStates } from '@omni-federal/panda-preset'

describe('recipe states', () => {
  test('should export focusStates', () => {
    expect(focusStates._focusVisible).toBeDefined()
    expect(focusStates._focusVisible).toMatchObject({
      boxShadow: 'none',
      outline: '3px solid',
      outlineColor: 'action.border.focus',
      outlineOffset: '2px',
    })
  })

  test('should export formStates', () => {
    expect(formStates._disabled).toBeDefined()
    expect(formStates._disabled).toMatchObject({
      cursor: 'not-allowed',
      opacity: '0.5',
    })

    expect(formStates._readOnly).toBeDefined()
    expect(formStates._readOnly).toMatchObject({
      cursor: 'default',
    })
  })
})
