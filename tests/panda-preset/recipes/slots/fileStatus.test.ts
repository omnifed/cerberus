import { describe, test, expect } from 'bun:test'
import { fileStatusAnatomy, slotRecipes } from '@cerberus/panda-preset'

describe('fileStatus recipe', () => {
  const { fileStatus } = slotRecipes

  test('should be exported', () => {
    expect(fileStatus).toBeDefined()
  })

  test('should have one slot per anatomy part', () => {
    expect(fileStatus.slots).toEqual(fileStatusAnatomy.keys())
  })

  test('should lay the card out as a row', () => {
    expect(fileStatus.base?.root).toMatchObject({
      alignItems: 'center',
      bgColor: 'page.surface.100',
      border: '2px solid',
      borderColor: 'page.border.initial',
      display: 'flex',
      flexDirection: 'row',
      gap: '8px',
      p: 4,
      rounded: 'sm',
      w: 'full',
    })
  })

  test('should stack the info column', () => {
    expect(fileStatus.base?.info).toMatchObject({
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.12rem',
      w: 'full',
    })
  })

  test('should style the name and status text as small labels', () => {
    expect(fileStatus.base?.name).toMatchObject({
      color: 'page.text.initial',
      textStyle: 'label-sm',
    })
    expect(fileStatus.base?.statusText).toMatchObject({
      color: 'page.text.100',
      textStyle: 'label-sm',
    })
  })

  test('should keep the icon from shrinking', () => {
    expect(fileStatus.base?.icon).toMatchObject({ flexShrink: 0 })
  })

  test('should have no variants', () => {
    expect(fileStatus.variants ?? {}).toEqual({})
  })
})
