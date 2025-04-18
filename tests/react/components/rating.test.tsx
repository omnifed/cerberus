import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Rating,
  RatingParts,
  type UseRatingGroupContext,
} from '@cerberus-design/react'
import { StarFilled } from '@carbon/icons-react'

describe('Rating & RatingParts', () => {
  test('should render a rating element', () => {
    render(<Rating defaultValue={3}>{() => <StarFilled size={24} />}</Rating>)
    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
  })

  test('should render RatingParts', () => {
    render(
      <RatingParts.Root
        defaultValue={3}
        orientation="horizontal"
        palette="warning"
        size="md"
      >
        <RatingParts.Label>This is a custom rating</RatingParts.Label>

        <RatingParts.Control>
          <RatingParts.Context>
            {(context: UseRatingGroupContext) =>
              context.items.map((item) => (
                <RatingParts.Item key={item} index={item}>
                  <RatingParts.ItemContext>
                    {() => <StarFilled size={24} />}
                  </RatingParts.ItemContext>
                </RatingParts.Item>
              ))
            }
          </RatingParts.Context>
        </RatingParts.Control>
        <RatingParts.HiddenInput />
      </RatingParts.Root>,
    )

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
  })
})
