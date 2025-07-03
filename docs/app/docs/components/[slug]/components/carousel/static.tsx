import { Carousel, For } from '@cerberus-design/react'
import { Center } from '@/styled-system/jsx'
import items from './items.json'

export function BasicDemo() {
  return (
    <Carousel.Root
      defaultPage={0}
      padding="1rem"
      slideCount={items.length}
      slidesPerPage={2.5}
      spacing="1rem"
    >
      <For each={items}>
        {(item, idx) => (
          <Carousel.Item key={item.id} index={idx} asChild>
            <Center
              bgColor="page.bg.100"
              border="1px solid"
              borderColor="page.border.200"
              color="page.text.100"
              h="16rem"
              rounded="md"
              transitionProperty="all"
              transitionDuration="normal"
              transitionTimingFunction="cubic-bezier(0.075, 0.82, 0.165, 1)"
              _hover={{
                h: '21rem',
                shadow: 'lg',
                transform: 'scale(1.2)',
                zIndex: 'decorator',
              }}
            >
              {item.content}
            </Center>
          </Carousel.Item>
        )}
      </For>
    </Carousel.Root>
  )
}
