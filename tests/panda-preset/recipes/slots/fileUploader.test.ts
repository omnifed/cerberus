import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('fileUploader recipe', () => {
  const { fileUploader } = slotRecipes
  const base = fileUploader.base as Record<string, any>

  test('should be exported', () => {
    expect(fileUploader).toBeDefined()
  })

  test('should set the metadata', () => {
    expect(fileUploader.className).toBe('file-uploader')
    expect(fileUploader.description).toBe(
      'The styles for FileUploader components',
    )
    expect(fileUploader.slots).toMatchObject([
      'root',
      'dropzone',
      'item',
      'itemDeleteTrigger',
      'itemGroup',
      'itemName',
      'itemPreview',
      'itemPreviewImage',
      'itemSizeText',
      'label',
      'trigger',
      'clearTrigger',
      'icon',
      'heading',
      'description',
    ])
    expect(fileUploader.jsx).toMatchObject(['ConfirmModal', 'PromptModal'])
  })

  test('should have a root style', () => {
    expect(base.root).toMatchObject({
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 'md',
      maxW: '36rem',
      w: 'full',
    })
  })

  test('should have a dropzone style', () => {
    expect(base.dropzone).toMatchObject({
      alignItems: 'center',
      bgColor: 'page.surface.100',
      borderColor: 'page.border.100',
      borderStyle: 'dashed',
      borderWidth: '2.5px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      justifyContent: 'center',
      minH: '14rem',
      px: '6',
      py: '4',
      rounded: 'md',
      transitionProperty: 'background-color, border, opacity',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-in-out',
      w: 'full',
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
        _hover: {
          borderColor: 'page.border.100',
          borderStyle: 'dashed',
          bgColor: 'page.surface.100',
        },
      },
      _hover: {
        borderColor: 'action.border.focus',
        borderStyle: 'solid',
        bgColor: 'action.ghost.hover',
      },
      _isOver: {
        borderColor: 'action.border.focus',
        borderStyle: 'solid',
        bgColor: 'action.ghost.hover',
      },
    })
  })

  test('should have a label style', () => {
    expect(base.label).toMatchObject({
      cursor: 'pointer',
      textAlign: 'center',
      textStyle: 'label-sm',
      userSelect: 'none',
    })
  })

  test('should have a trigger style', () => {
    expect(base.trigger).toMatchObject({})
  })

  test('should have a clearTrigger style', () => {
    expect(base.clearTrigger).toMatchObject({})
  })

  test('should have a trigger style', () => {
    expect(base.trigger).toMatchObject({})
  })

  test('should have a itemGroup style', () => {
    expect(base.itemGroup).toMatchObject({
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      w: 'full',
    })
  })

  test('should have a item style', () => {
    expect(base.item).toMatchObject({
      animation: 'fadeIn 0.25s ease-out',
      bgColor: 'page.surface.100',
      borderColor: 'page.border.initial',
      borderRadius: 'sm',
      borderWidth: '1px',
      columnGap: 3,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gridTemplateAreas: `
             "preview name delete"
             "preview size delete"
             `,
      p: '4',
    })
  })

  test('should have an itemPreview style', () => {
    expect(base.itemPreview).toMatchObject({
      gridArea: 'preview',
    })
  })

  test('should have an itemName style', () => {
    expect(base.itemName).toMatchObject({
      color: 'page.text.initial',
      gridArea: 'name',
      textStyle: 'label-sm',
    })
  })

  test('should have an itemSizeText style', () => {
    expect(base.itemSizeText).toMatchObject({
      color: 'page.text.100',
      gridArea: 'size',
      textStyle: 'label-sm',
    })
  })

  test('should have an itemDeleteTrigger style', () => {
    expect(base.itemDeleteTrigger).toMatchObject({
      alignSelf: 'center',
      gridArea: 'delete',
    })
  })

  test('should have an itemPreviewImage style', () => {
    expect(base.itemPreviewImage).toMatchObject({
      aspectRatio: '1',
      height: '10',
      objectFit: 'scale-down',
      width: '10',
    })
  })

  test('should have a icon style', () => {
    expect(base.icon).toMatchObject({
      mxi: 'auto',
      p: '2',
    })
  })

  test('should have a heading style', () => {
    expect(base.heading).toMatchObject({
      color: 'page.text.initial',
      pt: '2',
      textStyle: 'heading-xs',
    })
  })

  test('should have a description style', () => {
    expect(base.description).toMatchObject({
      color: 'page.text.100',
      textStyle: 'label-sm',
    })
  })
})
