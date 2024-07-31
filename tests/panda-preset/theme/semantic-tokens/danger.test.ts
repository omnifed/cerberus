import { describe, test, expect } from 'bun:test'
import { dangerTokens } from '@cerberus-design/panda-preset'

describe('dangerTokens', () => {
  function formatToken(token: string) {
    return token.toUpperCase()
  }

  test('should have a danger property', () => {
    expect(dangerTokens.danger).toBeDefined()
  })

  test('should have a bg property', () => {
    expect(dangerTokens.danger.bg).toBeDefined()
  })

  test('should have a bg.initial property', () => {
    expect(
      formatToken(dangerTokens.danger.bg.initial.value._cerberusTheme.base),
    ).toEqual('#97201B')
    expect(
      formatToken(
        dangerTokens.danger.bg.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#97201B')
    expect(
      formatToken(
        dangerTokens.danger.bg.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FB362D')
  })

  test('should have a bg.hover property', () => {
    expect(
      formatToken(dangerTokens.danger.bg.hover.value._cerberusTheme.base),
    ).toEqual('#FD8681')
    expect(
      formatToken(dangerTokens.danger.bg.hover.value._cerberusTheme._darkMode),
    ).toEqual('#FD8681')
    expect(
      formatToken(dangerTokens.danger.bg.hover.value._cerberusTheme._lightMode),
    ).toEqual('#97201B')
  })

  test('should have a bg.active property', () => {
    expect(
      formatToken(dangerTokens.danger.bg.active.value._cerberusTheme.base),
    ).toEqual('#FDAFAB')
    expect(
      formatToken(dangerTokens.danger.bg.active.value._cerberusTheme._darkMode),
    ).toEqual('#FDAFAB')
    expect(
      formatToken(
        dangerTokens.danger.bg.active.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#641612')
  })

  test('should have a border property', () => {
    expect(dangerTokens.danger.border).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(
      formatToken(dangerTokens.danger.border.initial.value._cerberusTheme.base),
    ).toEqual('#FDAFAB')
    expect(
      formatToken(
        dangerTokens.danger.border.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#FDAFAB')
    expect(
      formatToken(
        dangerTokens.danger.border.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FC5E57')
  })

  test('should have a ghost property', () => {
    expect(dangerTokens.danger.ghost).toBeDefined()
  })

  test('should have a ghost.initial property', () => {
    expect(
      formatToken(dangerTokens.danger.ghost.initial.value._cerberusTheme.base),
    ).toEqual('#130024')
    expect(
      formatToken(
        dangerTokens.danger.ghost.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#130024')
    expect(
      formatToken(
        dangerTokens.danger.ghost.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FFFFFF')
  })

  test('should have a ghost.hover property', () => {
    expect(
      formatToken(dangerTokens.danger.ghost.hover.value._cerberusTheme.base),
    ).toEqual('#641612')
    expect(
      formatToken(
        dangerTokens.danger.ghost.hover.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#641612')
    expect(
      formatToken(
        dangerTokens.danger.ghost.hover.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FFEBEA')
  })

  test('should have a ghost.active property', () => {
    expect(
      formatToken(dangerTokens.danger.ghost.active.value._cerberusTheme.base),
    ).toEqual('#97201B')
    expect(
      formatToken(
        dangerTokens.danger.ghost.active.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#97201B')
    expect(
      formatToken(
        dangerTokens.danger.ghost.active.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FED7D5')
  })

  test('should have a surface.initial property', () => {
    expect(dangerTokens.danger.surface).toBeDefined()
  })

  test('should have a surface.initial property', () => {
    expect(
      formatToken(
        dangerTokens.danger.surface.initial.value._cerberusTheme.base,
      ),
    ).toEqual('#97201B')
    expect(
      formatToken(
        dangerTokens.danger.surface.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#97201B')
    expect(
      formatToken(
        dangerTokens.danger.surface.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FDAFAB')
  })

  test('should have a surface.100 property', () => {
    expect(
      formatToken(dangerTokens.danger.surface['100'].value._cerberusTheme.base),
    ).toEqual('#641612')
    expect(
      formatToken(
        dangerTokens.danger.surface['100'].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#641612')
    expect(
      formatToken(
        dangerTokens.danger.surface['100'].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FFEBEA')
  })

  test('should have a surface.200 property', () => {
    expect(
      formatToken(dangerTokens.danger.surface['200'].value._cerberusTheme.base),
    ).toEqual('#DA1E28')
    expect(
      formatToken(
        dangerTokens.danger.surface['200'].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#DA1E28')
    expect(
      formatToken(
        dangerTokens.danger.surface['200'].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FC5E57')
  })

  test('should have a text property', () => {
    expect(dangerTokens.danger.text).toBeDefined()
  })

  test('should have a text.initial property', () => {
    expect(
      formatToken(dangerTokens.danger.text.initial.value._cerberusTheme.base),
    ).toEqual('#FFEBEA')
    expect(
      formatToken(
        dangerTokens.danger.text.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#FFEBEA')
    expect(
      formatToken(
        dangerTokens.danger.text.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#320B09')
  })

  test('should have a text.100 property', () => {
    expect(
      formatToken(dangerTokens.danger.text['100'].value._cerberusTheme.base),
    ).toEqual('#FDAFAB')
    expect(
      formatToken(
        dangerTokens.danger.text['100'].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#FDAFAB')
    expect(
      formatToken(
        dangerTokens.danger.text['100'].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#97201B')
  })

  test('should have a text.200 property', () => {
    expect(
      formatToken(dangerTokens.danger.text['200'].value._cerberusTheme.base),
    ).toEqual('#FC5E57')
    expect(
      formatToken(
        dangerTokens.danger.text['200'].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#FC5E57')
    expect(
      formatToken(
        dangerTokens.danger.text['200'].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#DA1E28')
  })

  test('should have a text.inverse property', () => {
    expect(dangerTokens.danger.text.inverse).toBeDefined()
  })

  test('should have a text.inverse property', () => {
    expect(
      formatToken(dangerTokens.danger.text.inverse.value._cerberusTheme.base),
    ).toEqual('#641612')
    expect(
      formatToken(
        dangerTokens.danger.text.inverse.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#641612')
    expect(
      formatToken(
        dangerTokens.danger.text.inverse.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FFEBEA')
  })
})
