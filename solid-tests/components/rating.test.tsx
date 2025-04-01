import { describe, test, expect } from 'vitest'
import { render, screen } from '@solidjs/testing-library'
import { Rating, RatingParts } from '@cerberus-design/solid'
import { Index, Show } from 'solid-js'

describe('Rating & RatingParts', () => {
  test('should render a rating element', () => {
    render(() => (
      <Rating defaultValue={3}>
        {(context) => (
          <Show when={context().highlighted} fallback={<>N</>}>
            <>F</>
          </Show>
        )}
      </Rating>
    ))
    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
  })

  test('should render RatingParts', () => {
    render(() => (
      <RatingParts.Root
        defaultValue={3}
        orientation="horizontal"
        palette="warning"
        size="md"
      >
        <RatingParts.Label>This is a custom rating</RatingParts.Label>

        <RatingParts.Control>
          <RatingParts.Context>
            {(context) => (
              <Index each={context().items}>
                {(item) => (
                  <RatingParts.Item index={item()}>
                    <RatingParts.ItemContext>
                      {(context) => (
                        <Show when={context().highlighted} fallback={<>N</>}>
                          <>F</>
                        </Show>
                      )}
                    </RatingParts.ItemContext>
                  </RatingParts.Item>
                )}
              </Index>
            )}
          </RatingParts.Context>
        </RatingParts.Control>
        <RatingParts.HiddenInput />
      </RatingParts.Root>
    ))

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
  })
})
