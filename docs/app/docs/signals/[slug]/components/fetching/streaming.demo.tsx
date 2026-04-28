'use client'

import { Stack } from '@/styled-system/jsx'
import { Button, Field, Group, Input, Show, Text } from '@cerberus-design/react'
import { createQuery, useQuery, useSignal } from '@cerberus-design/signals'
import { ChangeEvent, Suspense } from 'react'

// --- 1. Fake Streaming LLM API ---
// Simulates an AI sending text chunks over a network
async function* fakeLLMStream(prompt: string) {
  const responseText = `You asked: "${prompt}".\n\nThis is a simulated streaming response from the Cerberus Signals engine. Notice how the text appears chunk by chunk. Because the query engine natively understands Async Generators, it bypasses React Suspense boundaries mid-stream, achieving an instant, seamless real-time UX without complex socket bindings.`

  const words = responseText.split(' ')

  for (let i = 0; i < words.length; i++) {
    // Simulate 50ms network delay per word chunk
    await new Promise((res) => setTimeout(res, 50))
    yield words[i] + ' '
  }
}

// --- 2. Define Streaming Query Factory ---
// The fetcher uses `async function*` and yields the accumulated state
const getChatStream = createQuery<string, string>(async function* (prompt: string) {
  let fullText = ''

  // Listen to the stream and accumulate chunks
  for await (const chunk of fakeLLMStream(prompt)) {
    fullText += chunk
    // The moment this yields, Cerberus sets the cache status to 'streaming'
    // and passes the partial data directly to the UI
    yield fullText
  }
}, 'queryChatStream')

// --- 3. Consume in Component ---
function ChatWindow(props: { prompt: string }) {
  // 1. Initially suspends while waiting for the network connection
  // 2. Automatically resumes and streams as chunks arrive
  const chatResponse = useQuery(getChatStream(props.prompt))

  return (
    <Stack gap="md" p="md" bg="surface.container" rounded="md">
      <Text textStyle="body-md">{chatResponse}</Text>
    </Stack>
  )
}

export function StreamingDemo() {
  const [input, setInput] = useSignal('How does Cerberus handle streams?')
  const [submittedPrompt, setSubmittedPrompt] = useSignal('')

  return (
    <Stack gap="lg" w="3/4">
      <Show when={submittedPrompt}>
        {() => (
          <Suspense
            fallback={
              <Text as="small" textStyle="body-xs">
                Thinking...
              </Text>
            }
          >
            <ChatWindow prompt={submittedPrompt} />
          </Suspense>
        )}
      </Show>

      <Group layout="attached" w="full">
        <Field required>
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            value={input}
            borderTopRightRadius="none"
            borderBottomRightRadius="none"
            h="2.75rem"
          />
        </Field>
        <Button onClick={() => setSubmittedPrompt(input)}>Send Prompt</Button>
      </Group>
    </Stack>
  )
}
