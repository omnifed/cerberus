import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Carousel, For } from '@cerberus-design/react'

describe('Carousel', () => {
  test('renders correctly', () => {
    render(
      <Carousel.Root slideCount={3} slidesPerPage={1}>
        <Carousel.ItemGroup>
          <For each={[1, 2, 3]}>
            {(item) => (
              <Carousel.Item key={item} index={item - 1}>
                Slide {item}
              </Carousel.Item>
            )}
          </For>
        </Carousel.ItemGroup>
      </Carousel.Root>,
    )
    expect(screen.getByText('Slide 1')).toBeInTheDocument()
    expect(screen.getByText('Slide 2')).toBeInTheDocument()
    expect(screen.getByText('Slide 3')).toBeInTheDocument()
  })
})
