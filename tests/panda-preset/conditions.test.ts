import { describe, test, expect } from 'bun:test'
import { conditions } from '@cerberus-design/panda-preset'

describe('conditions', () => {
  test('should have a cerberusTheme', () => {
    expect(conditions.cerberusTheme).toEqual('[data-panda-theme=cerberus] &')
  })

  test('should have an acheronTheme', () => {
    expect(conditions.acheronTheme).toEqual('[data-panda-theme=acheron] &')
  })

  test('should have a lightMode', () => {
    expect(conditions.lightMode).toEqual(
      '[data-color-mode=light] &, &.light, .light &',
    )
  })

  test('should have a darkMode', () => {
    expect(conditions.darkMode).toEqual(
      '[data-color-mode=dark] &, &.dark, .dark &',
    )
  })

  test('should have a systemMode', () => {
    expect(conditions.systemMode).toEqual(
      '[data-color-mode=system] &, &.system, .system &',
    )
  })

  test('should have a modalOpen', () => {
    expect(conditions.modalOpen).toEqual('&:is([data-modal-open=true])')
  })

  test('should have a screenReaderOnly', () => {
    expect(conditions.screenReaderOnly).toEqual(
      '&:is([data-screen-reader-only=true])',
    )
  })

  test('should have an isOver', () => {
    expect(conditions.isOver).toEqual('&:is([data-over=true])')
  })

  test('should have an isDropped', () => {
    expect(conditions.isDropped).toEqual('&:is([data-dropped=true])')
  })

  test('should have a userInvalid', () => {
    expect(conditions.userInvalid).toEqual(
      '&:is(:user-invalid, [aria-invalid], [data-invalid])',
    )
  })

  test('should have a groupInvalid', () => {
    expect(conditions.groupInvalid).toEqual(
      '.group:is([data-invalid] &, [aria-invalid]) &',
    )
  })

  test('should have a groupChecked', () => {
    expect(conditions.groupChecked).toEqual(
      '.group:is([data-checked="true"] &, [aria-checked="true"]) &',
    )
  })

  test('should have an open', () => {
    expect(conditions.open).toEqual(
      '&:is([open], [data-open], [data-state=open])',
    )
  })

  test('should have a closed', () => {
    expect(conditions.closed).toEqual(
      '&:is([closed], [data-closed], [data-state=closed])',
    )
  })

  test('should have a checked', () => {
    expect(conditions.checked).toEqual(
      '&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])',
    )
  })

  test('should have a notDisabled', () => {
    expect(conditions.notDisabled).toEqual(
      '&:is(:not([disabled]), [data-disabled=false])',
    )
  })

  test('should have a dataReadOnly', () => {
    expect(conditions.dataReadOnly).toEqual('&:is([data-readonly])')
  })

  test('should have an indeterminate', () => {
    expect(conditions.indeterminate).toEqual('&:is([data-state=indeterminate])')
  })

  test('should have a positionBottom', () => {
    expect(conditions.positionBottom).toEqual('&:is([data-position=bottom])')
  })

  test('should have a positionTop', () => {
    expect(conditions.positionTop).toEqual('&:is([data-position=top])')
  })

  test('should have a positionLeft', () => {
    expect(conditions.positionLeft).toEqual('&:is([data-position=left])')
  })

  test('should have a positionRight', () => {
    expect(conditions.positionRight).toEqual('&:is([data-position=right])')
  })

  test('should have a startIcon', () => {
    expect(conditions.startIcon).toEqual('&:is([data-start-icon=true])')
  })

  test('should have a startIndicator', () => {
    expect(conditions.startIndicator).toEqual(
      '&:is([data-indicator-position=start])',
    )
  })

  test('should have an endIndicator', () => {
    expect(conditions.endIndicator).toEqual(
      '&:is([data-indicator-position=end])',
    )
  })

  test('should have an xsSize', () => {
    expect(conditions.xsSize).toEqual('&:is([data-size=xs])')
  })

  test('should have a smSize', () => {
    expect(conditions.smSize).toEqual('&:is([data-size=sm])')
  })

  test('should have a mdSize', () => {
    expect(conditions.mdSize).toEqual('&:is([data-size=md])')
  })

  test('should have a lgSize', () => {
    expect(conditions.lgSize).toEqual('&:is([data-size=lg])')
  })

  test('should have a xlSize', () => {
    expect(conditions.xlSize).toEqual('&:is([data-size=xl])')
  })

  test('should have a tooltip', () => {
    expect(conditions.tooltip).toEqual('&:is([data-tooltip=true])')
  })

  test('should have a notify', () => {
    expect(conditions.notify).toEqual('&:is([data-notify=true])')
  })

  test('should have an admin', () => {
    expect(conditions.admin).toEqual('&:is([data-role=admin])')
  })

  test('should have a student', () => {
    expect(conditions.student).toEqual('&:is([data-role=student])')
  })

  test('should have a user', () => {
    expect(conditions.user).toEqual('&:is([data-role=user])')
  })

  test('should have a highlight', () => {
    expect(conditions.highlight).toEqual('&:is(::selection)')
  })

  test('should have a spellingError', () => {
    expect(conditions.spellingError).toEqual('&:is(::spelling-error)')
  })

  test('should have a grammarError', () => {
    expect(conditions.grammarError).toEqual('&:is(::grammar-error)')
  })

  test('should have a pagePalette', () => {
    expect(conditions.pagePalette).toEqual('&:is([data-palette=page])')
  })

  test('should have an actionPalette', () => {
    expect(conditions.actionPalette).toEqual('&:is([data-palette=action])')
  })

  test('should have a secondaryActionPalette', () => {
    expect(conditions.secondaryActionPalette).toEqual(
      '&:is([data-palette=secondaryAction])',
    )
  })

  test('should have an infoPalette', () => {
    expect(conditions.infoPalette).toEqual('&:is([data-palette=info])')
  })

  test('should have a successPalette', () => {
    expect(conditions.successPalette).toEqual('&:is([data-palette=success])')
  })

  test('should have a warningPalette', () => {
    expect(conditions.warningPalette).toEqual('&:is([data-palette=warning])')
  })

  test('should have a dangerPalette', () => {
    expect(conditions.dangerPalette).toEqual('&:is([data-palette=danger])')
  })

  test('should have a info', () => {
    expect(conditions.info).toEqual(
      '&:is([data-type=info], [data-type=loading])',
    )
  })

  test('should have a success', () => {
    expect(conditions.success).toEqual('&:is([data-type=success])')
  })

  test('should have a warning', () => {
    expect(conditions.warning).toEqual('&:is([data-type=warning])')
  })

  test('should have a danger', () => {
    expect(conditions.danger).toEqual(
      '&:is([data-type=danger], [data-type=error])',
    )
  })

  test('should have a isComplete', () => {
    expect(conditions.isComplete).toEqual('&:is([data-complete=true])')
  })

  test('should have a today', () => {
    expect(conditions.today).toEqual(
      '&:is([data-today=true], [data-date=today])',
    )
  })

  test('should have a pastDay', () => {
    expect(conditions.pastDay).toEqual(
      '&:is([data-past-day=true], [data-date=past])',
    )
  })

  test('should have an inRange', () => {
    expect(conditions.inRange).toEqual('&:is([data-in-range])')
  })

  test('should have a startRange', () => {
    expect(conditions.startRange).toEqual('&:is([data-range-start])')
  })

  test('should have an endRange', () => {
    expect(conditions.endRange).toEqual('&:is([data-range-end])')
  })
})
