'use client'

import { useActionState, useEffect } from 'react'
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
  toaster,
} from '@cerberus-design/react'
import { Box, HStack, VStack } from 'styled-system/jsx'
import { box } from 'styled-system/patterns'
import { createProfile } from './actions'

// Since this a client component, we can store the form data in a local state
const initialState = {
  success: false,
  data: null,
}

export function ProfileForm() {
  const collection = createSelectCollection([
    { label: 'Younger than 13', value: '1' },
    { label: '13-20', value: '2' },
    { label: '21 and older', value: '3' },
  ])

  const [state, formAction, pending] = useActionState(
    createProfile,
    initialState,
  )

  useEffect(() => {
    if (state.success) {
      toaster.create({
        title: 'Profile updated',
        description: 'Your profile has been updated!',
        type: 'success',
      })
    }
  }, [state.success])

  return (
    <form
      action={formAction}
      className={box({
        bgColor: 'page.surface.100',
        border: '1px solid',
        borderColor: 'page.border.initial',
        p: 'xl',
        rounded: 'lg',
        w: '3/4',
      })}
      noValidate
    >
      <Fieldset
        legend="Your Account Profile"
        helperText="Tell us a little more about yourself so we can serve you better."
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
              label="First Name"
              ids={{
                control: 'first_name',
              }}
              errorText={state.data?.message}
              helperText="This is what everyone will see when you post a
              comment."
              invalid={state.data?.field === 'first_name'}
              required
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
              label="Last Name"
              ids={{
                control: 'last_name',
              }}
              errorText={state.data?.message}
              helperText="This is what everyone will see when you post a comment."
              invalid={state.data?.field === 'last_name'}
              required
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
              errorText={state.data?.message}
              invalid={state.data?.field === 'age'}
              required
            >
              <Select
                collection={collection}
                name="age"
                placeholder="Select an option"
              >
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
            <Button pending={pending} shape="rounded" type="submit">
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
