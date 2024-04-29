import { describe, test, expect } from 'bun:test'
import { conditions } from '@cerberus-design/panda-preset'

describe('conditions', () => {
  test('should have a duTheme', () => {
    expect(conditions.duTheme).toEqual('[data-theme=du] &')
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

  test('should have a modalOpen', () => {
    expect(conditions.modalOpen).toEqual('&:is([data-modal-open=true])')
  })

  test('should have a screenReaderOnly', () => {
    expect(conditions.screenReaderOnly).toEqual(
      '&:is([data-screen-reader-only=true])',
    )
  })

  test('should have an invalid', () => {
    expect(conditions.invalid).toEqual(
      '&:is(:invalid, [data-invalid], [aria-invalid])',
    )
  })

  test('should have a userInvalid', () => {
    expect(conditions.userInvalid).toEqual(
      '&:is(:user-invalid, [aria-invalid])',
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

  test('should have an admin', () => {
    expect(conditions.admin).toEqual('&:is([data-role=admin])')
  })

  test('should have a student', () => {
    expect(conditions.student).toEqual('&:is([data-role=student])')
  })

  test('should have a user', () => {
    expect(conditions.user).toEqual('&:is([data-role=user])')
  })
})
