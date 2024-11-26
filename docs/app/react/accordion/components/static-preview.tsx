import { AccordionItemGroup, Accordion, Show } from '@cerberus-design/react'
import Image from 'next/image'
import { Box } from '@cerberus-design/styled-system/jsx'
import data from './data.json'
import { Suspense } from 'react'

export function StaticPreview() {
  return (
    <Box w="2/3">
      <Accordion>
        {data.map((item) => (
          <AccordionItemGroup
            heading={item.heading}
            key={item.id}
            value={item.value}
          >
            <Show when={item.content !== null} fallback={<FallbackContent />}>
              {item.content}
            </Show>
          </AccordionItemGroup>
        ))}
      </Accordion>
    </Box>
  )
}

function FallbackContent() {
  return (
    <Box position="relative" w="full">
      <Suspense>
        <Image
          alt="A fiery cerberus"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d7b49a9-2590-4dda-88ad-8046da56428b/dg97zza-65055527-eaf3-48e6-86aa-cf70a0880eea.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRkN2I0OWE5LTI1OTAtNGRkYS04OGFkLTgwNDZkYTU2NDI4YlwvZGc5N3p6YS02NTA1NTUyNy1lYWYzLTQ4ZTYtODZhYS1jZjcwYTA4ODBlZWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BT7UC12eP5ibJs6uEYPIOQNQ6Xdnvw1ttIrCEgPvcSk"
          height={447}
          width={794}
        />
      </Suspense>
    </Box>
  )
}
