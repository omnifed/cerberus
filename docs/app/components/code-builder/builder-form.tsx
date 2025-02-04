'use client'

import { vstack } from '@cerberus/styled-system/patterns'
import type { BuilderResult, NumberResult, TextResult } from './helpers'
import {
  Field,
  Show,
  Switch,
  type SelectCollectionItem,
  type SelectValueChangeDetails,
} from '@cerberus-design/react'
import { lazy, useCallback, type ChangeEvent } from 'react'
import { useCodeBuilder } from '@/app/context/code-builder'

const Select = lazy(() => import('./builder-select'))
const Input = lazy(() => import('./builder-input'))

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

  const handleCheckedChange = useCallback(
    (name: string, checked: boolean) => {
      setSelectedProps(name, checked)
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
          <Field
            ids={{
              control: key,
            }}
            label={key}
          >
            <Show when={props.api[key].type === 'enum'}>
              <Select
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
              <Input
                {...(props.api[key] as TextResult)}
                onChange={handleInputChange}
                selectedValue={selectedProps[key] as string}
              />
            </Show>

            <Show when={props.api[key].type === 'number'}>
              <Input
                {...(props.api[key] as NumberResult)}
                onChange={handleInputChange}
                selectedValue={selectedProps[key] as string}
              />
            </Show>

            <Show when={props.api[key].type === 'boolean'}>
              <Switch
                ids={{
                  control: key,
                }}
                checked={selectedProps[key] as boolean}
                name={key}
                onCheckedChange={(details: { checked: boolean }) => {
                  handleCheckedChange(key, details.checked)
                }}
              >
                show {key}
              </Switch>
            </Show>
          </Field>
        </div>
      ))}
    </div>
  )
}
