'use client'

import { vstack } from '@cerberus/styled-system/patterns'
import type {
  BooleanResult,
  BuilderResult,
  EnumResult,
  NumberResult,
  TextResult,
} from './helpers'
import {
  Field,
  Label,
  Show,
  type SelectCollectionItem,
} from '@cerberus-design/react'
import { lazy, useCallback, type ChangeEvent } from 'react'
import { useCodeBuilder } from '@/app/context/code-builder'
import { css } from '@cerberus/styled-system/css'

const Select = lazy(() => import('./builder-select'))
const Input = lazy(() => import('./builder-input'))
const Toggle = lazy(() => import('./builder-toggle'))

interface BuilderFormProps {
  api: Record<string, BuilderResult>
}

export default function BuilderForm(props: BuilderFormProps) {
  const { selectedProps, setSelectedProps } = useCodeBuilder()

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSelectedProps(e.currentTarget.name, e.currentTarget.value)
    },
    [setSelectedProps],
  )

  const handleSelectChange = useCallback(
    (key: string, item: SelectCollectionItem) => {
      setSelectedProps(key, item.value)
    },
    [setSelectedProps],
  )

  const handleToggleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSelectedProps(e.currentTarget.name, e.currentTarget.checked)
    },
    [setSelectedProps],
  )

  return (
    <div
      className={vstack({
        alignItems: 'flex-start',
        gap: '4',
        w: 'full',
      })}
    >
      {Object.keys(props.api).map((key) => (
        <div
          key={key}
          className={vstack({
            alignItems: 'flex-start',
            w: 'full',
          })}
        >
          <Field>
            <Show when={props.api[key].type === 'enum'}>
              <Select
                label={key}
                ids={{
                  control: `builder:select:${props.api[key].name}`,
                }}
                options={props.api[key].value}
                onValueChange={(e) => handleSelectChange(key, e.items[0])}
              />
            </Show>

            <Show when={props.api[key].type === 'text'}>
              <Label htmlFor={key}>{key}</Label>
              <Input
                {...(props.api[key] as TextResult)}
                id={key}
                name={key}
                onChange={handleInputChange}
                selectedValue={selectedProps[key] as string}
              />
            </Show>

            <Show when={props.api[key].type === 'number'}>
              <Label htmlFor={key}>{key}</Label>
              <Input
                {...(props.api[key] as NumberResult)}
                id={key}
                name={key}
                onChange={handleInputChange}
                selectedValue={selectedProps[key] as string}
              />
            </Show>

            <Show when={props.api[key].type === 'boolean'}>
              <Label htmlFor={key}>{key}</Label>
              <Toggle
                {...(props.api[key] as BooleanResult)}
                id={key}
                name={key}
                onChange={handleToggleChange}
              />
            </Show>
          </Field>
        </div>
      ))}
    </div>
  )
}
