import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus/panda-preset'

describe('fieldMessage recipe', () => {
  const { fieldMessage } = recipes

  test('should be exported', () => {
    expect(fieldMessage).toBeDefined()
  })

  test('should have a base style', () => {
    expect(fieldMessage.base).toMatchObject({
      color: 'page.text.200',
      textStyle: 'label-sm',
      _userInvalid: {
        color: 'danger.text.100',
      },
    })
  })
})
