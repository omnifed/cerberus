import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('fieldMessage recipe', () => {
  const { fieldMessage } = recipes

  test('should be exported', () => {
    expect(fieldMessage).toBeDefined()
  })

  test('should have a base style', () => {
    expect(fieldMessage.base).toMatchObject({
      color: 'neutral.text.200',
      textStyle: 'label-sm',
      pb: '1',
      _userInvalid: {
        color: 'danger.text.200',
      },
    })
  })
})
