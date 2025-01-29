'use client'

import { Checkbox } from '@cerberus-design/react'
import { VStack, Box } from '@cerberus-design/styled-system/jsx'
import { useState } from 'react'

const initialValues = [
  { label: 'Monday', checked: false, value: 'monday' },
  { label: 'Tuesday', checked: false, value: 'tuesday' },
  { label: 'Wednesday', checked: false, value: 'wednesday' },
  { label: 'Thursday', checked: false, value: 'thursday' },
]

export function IndeterminatePreview() {
  const [values, setValues] = useState(initialValues)

  const allChecked = values.every((value) => value.checked)
  const indeterminate = values.some((value) => value.checked) && !allChecked

  const items = values.map((item, index) => (
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
  ))

  return (
    <Box w="1/2">
      <VStack alignItems="flex-start">
        <Checkbox
          checked={indeterminate ? 'indeterminate' : allChecked}
          onCheckedChange={(e) => {
            setValues((current) =>
              current.map((value) => ({ ...value, checked: !!e.checked })),
            )
          }}
        >
          Weekdays
        </Checkbox>

        {items}
      </VStack>
    </Box>
  )
}
