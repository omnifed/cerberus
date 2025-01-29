import { Checkbox, CheckboxGroup, For } from '@cerberus-design/react'
import { Box } from '@cerberus-design/styled-system/jsx'

export function OverviewPreview() {
  const items = [
    {
      id: 'terms',
      label: 'I agree to the terms and conditions',

      required: true,
    },
    {
      id: 'legal',
      label: 'I would like to receive marketing emails',
    },
  ]

  return (
    <Box w="1/2">
      <CheckboxGroup name="user_acceptance">
        <For each={items}>
          {(item) => (
            <Checkbox
              key={item.id}
              ids={{ control: item.id }}
              required={Boolean(item.required)}
            >
              {item.label}
            </Checkbox>
          )}
        </For>

        <Checkbox ids={{ control: 'mixed' }} checked="indeterminate">
          The indeterminate state
        </Checkbox>
      </CheckboxGroup>
    </Box>
  )
}
