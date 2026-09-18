import { Center } from '@/styled-system/jsx'
import { Button, Carousel, For } from '@cerberus-design/react'
import { ITEMS } from './items'

export function BasicDemo() {
  return (
    <Carousel.Root
      defaultPage={0}
      padding="1rem"
      slideCount={ITEMS.length}
      slidesPerPage={2.5}
      spacing="1rem"
    >
      <Carousel.ItemGroup>
        <For each={ITEMS}>
          {(item, idx) => (
            <Carousel.Item key={item.id} index={idx} asChild>
              <Center
                bgColor="page.bg.100"
                border="1px solid"
                borderColor="page.border.200"
                color="page.text.100"
                h="21rem"
                rounded="md"
                transitionProperty="all"
                transitionDuration="normal"
                transitionTimingFunction="cubic-bezier(0.075, 0.82, 0.165, 1)"
                willChange="z-index, transform, box-shadow"
                _hover={{
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
      </Carousel.ItemGroup>

      <Carousel.Control>
        <Carousel.PrevTrigger asChild>
          <Button shape="rounded" size="sm" usage="outlined">
            Prev
          </Button>
        </Carousel.PrevTrigger>
        <Carousel.NextTrigger asChild>
          <Button shape="rounded" size="sm" usage="outlined">
            Next
          </Button>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}
