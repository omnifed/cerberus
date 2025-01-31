'use client'

import {
  Button,
  CheckboxGroup,
  Checkbox,
  Fieldset,
  Field,
  Input,
  Option,
  Select,
  createSelectCollection,
} from '@cerberus-design/react'
import { Box, HStack, VStack } from '@cerberus-design/styled-system/jsx'
import { box } from '@cerberus/styled-system/patterns'

export default function StandardLayout() {
  const collection = createSelectCollection([
    { label: 'Younger than 13', value: '1' },
    { label: '13-20', value: '2' },
    { label: '21 and older', value: '3' },
  ])

  return (
    <form
      className={box({
        bgColor: 'page.surface.100',
        border: '1px solid',
        borderColor: 'page.border.initial',
        p: 'xl',
        rounded: 'lg',
        w: '3/4',
      })}
    >
      <Fieldset
        legend="Your Account Profile"
        helperText="Tell us a little more about yourself so we can serve you better."
        errorText="There was a massive error when submitting the form."
        usage="formSection"
      >
        <VStack
          alignItems="flex-start"
          gap="lg"
          paddingBlockStart="md"
          w="full"
        >
          <Box w="full">
            <Field
              required
              label="First Name"
              ids={{
                control: 'first_name',
              }}
              errorText="A first name is required to submit the form."
              helperText="This is what everyone will see when you post a comment."
            >
              <Input
                name="first_name"
                placeholder="Enter your first name"
                type="text"
              />
            </Field>
          </Box>

          <Box w="full">
            <Field
              required
              label="Last Name"
              ids={{
                control: 'last_name',
              }}
              errorText="A last name is required to submit the form."
              helperText="This is what everyone will see when you post a comment."
            >
              <Input
                name="last_name"
                placeholder="Enter your last name"
                type="text"
              />
            </Field>
          </Box>

          <Box>
            <Field
              ids={{
                control: 'age',
              }}
              label="What's your age?"
              helperText="We are legally required to ask for your age."
              required
            >
              <Select collection={collection} placeholder="Select an option">
                {collection.items.map((item) => (
                  <Option key={item.value} item={item} />
                ))}
              </Select>
            </Field>
          </Box>

          <Fieldset legend="Terms and Conditions">
            <CheckboxGroup name="terms">
              <Checkbox value="1">I agree to the Terms and Conditions</Checkbox>
              <Checkbox value="2">
                I want to sign up for marketing emails
              </Checkbox>
            </CheckboxGroup>
          </Fieldset>

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
      </Fieldset>
    </form>
  )
}
