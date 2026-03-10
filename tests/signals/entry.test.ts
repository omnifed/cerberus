import { describe, test, expect } from 'bun:test'
import {
  createSignal,
  createComputed,
  createEffect,
  createQuery,
  createMutation,
  batch,
  useRead,
  useSignal,
  useQuery,
  useMutation,
  ReactiveText,
  createStoreContext,
} from '@cerberus-design/signals'

describe('entry file', () => {
  test('should export createSignal function', () => {
    expect(createSignal).toBeDefined()
  })

  test('should export createComputed function', () => {
    expect(createComputed).toBeDefined()
  })

  test('should export createEffect function', () => {
    expect(createEffect).toBeDefined()
  })

  test('should export createQuery function', () => {
    expect(createQuery).toBeDefined()
  })

  test('should export createMutation function', () => {
    expect(createMutation).toBeDefined()
  })

  test('should export batch function', () => {
    expect(batch).toBeDefined()
  })

  test('should export useRead function', () => {
    expect(useRead).toBeDefined()
  })

  test('should export useSignal function', () => {
    expect(useSignal).toBeDefined()
  })

  test('should export useQuery function', () => {
    expect(useQuery).toBeDefined()
  })

  test('should export useMutation function', () => {
    expect(useMutation).toBeDefined()
  })

  test('should export ReactiveText function', () => {
    expect(ReactiveText).toBeDefined()
  })

  test('should export createStoreContext function', () => {
    expect(createStoreContext).toBeDefined()
  })
})
