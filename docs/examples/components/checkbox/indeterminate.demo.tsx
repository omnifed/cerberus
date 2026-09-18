'use client'

import { Checkbox, CheckboxGroup, For } from '@cerberus-design/react'
import { createComputed, useRead, useSignal } from '@cerberus-design/signals'
import { Box } from 'styled-system/jsx'

const initialValues = [
  { label: 'Monday', checked: false, value: 'monday' },
  { label: 'Tuesday', checked: false, value: 'tuesday' },
  { label: 'Wednesday', checked: false, value: 'wednesday' },
  { label: 'Thursday', checked: false, value: 'thursday' },
]

export function IndeterminateDemo() {
  const [values, setValues, getValues] = useSignal(initialValues)

  const allChecked = createComputed(() => getValues().every((value) => value.checked))
  const indeterminate = createComputed(
    () => getValues().some((value) => value.checked) && !allChecked(),
  )
  const checkedState = createComputed<'indeterminate' | boolean>(() => {
    return indeterminate() ? 'indeterminate' : allChecked()
  })

  const checked = useRead(checkedState)

  return (
    <Box w="1/2">
      <CheckboxGroup name="days">
        <Checkbox
          checked={checked}
          onCheckedChange={(e) => {
            setValues((current) =>
              current.map((value) => ({ ...value, checked: !!e.checked })),
            )
          }}
        >
          Weekdays
        </Checkbox>

        <For each={values}>
          {(item, index) => (
            <Checkbox
              key={item.value}
              checked={item.checked}
              onCheckedChange={(e) => {
                setValues((current) => {
                  const newValues = [...current]
                  newValues[index] = { ...newValues[index], checked: !!e.checked }
                  return newValues
                })
              }}
            >
              {item.label}
            </Checkbox>
          )}
        </For>
      </CheckboxGroup>
    </Box>
  )
}
