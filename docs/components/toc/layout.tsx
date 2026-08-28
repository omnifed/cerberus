import { Divider, Scrollable, Stack } from '@/styled-system/jsx'
import { type PropsWithChildren } from 'react'
import { Heading } from './heading'
import { EditOnGithubLink } from './edit-link'

export function TocLayout(props: PropsWithChildren<object>) {
  return (
    <Scrollable hideScrollbar h="full" px="md" w="full">
      <Heading />

      <Stack gap="sm">
        {props.children}

        <Divider
          color="page.border.initial"
          my="md"
          mt="xl"
          orientation="horizontal"
          thickness="1px"
        />

        <EditOnGithubLink />
      </Stack>
    </Scrollable>
  )
}
