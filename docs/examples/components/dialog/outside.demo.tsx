'use client'

import { Box, Stack } from '@/styled-system/jsx'
import {
  Button,
  cerberus,
  DialogBackdrop,
  DialogCloseIconTrigger,
  DialogCloseTrigger,
  DialogContent,
  DialogHeading,
  DialogPositioner,
  DialogProvider,
  DialogTrigger,
  For,
  Portal,
} from '@cerberus-design/react'
import { useRef } from 'react'

export function OutsideScrollDemo() {
  const contentRef = useRef<HTMLDivElement | null>(null)

  return (
    <DialogProvider initialFocusEl={() => contentRef.current}>
      <DialogTrigger asChild>
        <Button>open dialog</Button>
      </DialogTrigger>

      <Portal>
        <DialogBackdrop />
        <DialogPositioner
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          position="fixed"
          inset="0"
          overflowY="auto"
          overscrollBehaviorY="contain"
          pointerEvents="auto"
        >
          <DialogContent
            ref={contentRef}
            margin="4rem auto"
            maxH="none"
            css={{
              '--dialog-content-w': '20rem',
            }}
          >
            <DialogCloseIconTrigger />

            <Stack gap="md" maxW="" w="full">
              <DialogHeading>Dialog Title</DialogHeading>
              <Stack gap="md" w="full">
                <For each={CONTENT_SECTIONS}>
                  {(section) => (
                    <cerberus.section key={section.title} w="full">
                      <cerberus.h3 textStyle="heading-2xs">{section.title}</cerberus.h3>
                      <cerberus.small color="page.text.100" textStyle="body-sm">
                        {section.body}
                      </cerberus.small>
                    </cerberus.section>
                  )}
                </For>
              </Stack>
            </Stack>

            <Box mt="md" w="full">
              <DialogCloseTrigger asChild>
                <Button>Close</Button>
              </DialogCloseTrigger>
            </Box>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogProvider>
  )
}

const CONTENT_SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing and using this service, you accept and agree to be bound by the terms and provisions of this agreement.',
  },
  {
    title: '2. Use License',
    body: 'Permission is granted to temporarily use this service for personal, non-commercial purposes only. This is the grant of a license, not a transfer of title.',
  },
  {
    title: '3. User Responsibilities',
    body: 'You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.',
  },
  {
    title: '4. Privacy Policy',
    body: 'Your use of this service is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.',
  },
  {
    title: '5. Limitations',
    body: 'In no event shall we be liable for any damages arising out of the use or inability to use the materials on this service.',
  },
  {
    title: '6. Revisions',
    body: 'We may revise these terms of service at any time without notice. By using this service you are agreeing to be bound by the then current version of these terms.',
  },
  {
    title: '7. Governing Law',
    body: 'These terms and conditions are governed by and construed in accordance with applicable laws and you irrevocably submit to the exclusive jurisdiction of the courts.',
  },
]
