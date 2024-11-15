import {
  Button,
  Field,
  FieldMessage,
  Input,
  Label,
  Option,
  Select,
} from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'
import { Box, HStack, VStack } from '@cerberus-design/styled-system/jsx'

export default function StandardLayout() {
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
        <Field required>
          <Label htmlFor="first_name">First Name</Label>
          <Input
            aria-describedby="help:first_name"
            id="first_name"
            placeholder="John"
          />
          <FieldMessage id="help:first_name">
            This is what everyone will see when you post a comment.
          </FieldMessage>
        </Field>
      </Box>

      <Box w="full">
        <Field required>
          <Label htmlFor="last_name">Last Name</Label>
          <Input
            aria-describedby="help:last_name"
            id="last_name"
            placeholder="Doe"
          />
          <FieldMessage id="help:last_name">
            Only you will see this in your profile.
          </FieldMessage>
        </Field>
      </Box>

      <Box>
        <Field>
          <Label htmlFor="age">Age</Label>
          <Select aria-describedby="help:age" id="age">
            <Option value="">Select an option</Option>
            <Option value="1">Younger than 13</Option>
            <Option value="2">13-20</Option>
            <Option value="3">21 and older</Option>
          </Select>
          <FieldMessage id="help:age">
            We are legally required to ask for your age.
          </FieldMessage>
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
