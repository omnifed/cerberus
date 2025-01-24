'use client'

import { vstack } from '@cerberus/styled-system/patterns'
import { css } from '@cerberus-design/styled-system/css'
import type {
  BooleanResult,
  BuilderResult,
  NumberResult,
  TextResult,
} from './helpers'
import {
  Field,
  FieldRoot,
  FieldLabel,
  Label,
  Show,
  type SelectCollectionItem,
  type SelectValueChangeDetails,
} from '@cerberus-design/react'
import { lazy, useCallback, type ChangeEvent } from 'react'
import { useCodeBuilder } from '@/app/context/code-builder'

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
                options={props.api[key].value as string[]}
                onValueChange={(e: SelectValueChangeDetails) =>
                  handleSelectChange(key, e.items[0])
                }
              />
            </Show>

            <Show when={props.api[key].type === 'text'}>
              <FieldRoot
                ids={{
                  control: key,
                }}
              >
                <FieldLabel
                  className={css({
                    color: 'page.text.initial',
                  })}
                >
                  {key}
                </FieldLabel>
                <Input
                  {...(props.api[key] as TextResult)}
                  onChange={handleInputChange}
                  selectedValue={selectedProps[key] as string}
                />
              </FieldRoot>
            </Show>

            <Show when={props.api[key].type === 'number'}>
              <Input
                {...(props.api[key] as NumberResult)}
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
