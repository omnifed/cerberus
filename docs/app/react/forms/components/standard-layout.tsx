'use client'

import {
  Button,
  Field,
  FieldHelperText,
  TextField,
  Option,
  Select,
  createSelectCollection,
} from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'
import { Box, HStack, VStack } from '@cerberus-design/styled-system/jsx'

export default function StandardLayout() {
  const collection = createSelectCollection([
    { label: 'Younger than 13', value: '1' },
    { label: '13-20', value: '2' },
    { label: '21 and older', value: '3' },
  ])

  return (
    <VStack
      alignItems="flex-start"
      bgColor="page.surface.100"
      border="1px solid"
      borderColor="page.border.initial"
      gap="lg"
      p="xl"
      rounded="lg"
      w="3/4"
    >
      <p
        className={css({
          color: 'page.text.200',
          textStyle: 'heading-xs',
        })}
      >
        Your Profile
      </p>

      <Box w="full">
        <TextField
          required
          label="First Name"
          ids={{
            control: 'first_name',
          }}
          errorText="A first name is required to submit the form."
          helperText="This is what everyone will see when you post a comment."
        />
      </Box>

      <Box w="full">
        <TextField
          required
          label="Last Name"
          ids={{
            control: 'last_name',
          }}
          errorText="A last name is required to submit the form."
          helperText="This is what everyone will see when you post a comment."
        />
      </Box>

      <Box>
        <Field
          ids={{
            control: 'age',
          }}
          required
        >
          <Select
            collection={collection}
            label="Age"
            placeholder="Select an option"
          >
            {collection.items.map((item) => (
              <Option key={item.value} item={item} />
            ))}
          </Select>
          <FieldHelperText>
            We are legally required to ask for your age.
          </FieldHelperText>
        </Field>
      </Box>

      <HStack>
        <Button shape="rounded" type="submit">
          Save
        </Button>
        <Button
          palette="secondaryAction"
          shape="rounded"
          type="button"
          usage="outlined"
        >
          Cancel
        </Button>
      </HStack>
    </VStack>
  )
}
