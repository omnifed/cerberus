import 'happydom'
import 'testing-library'
import { describe, test, expect } from 'bun:test'
import { render } from '@testing-library/react'
import { cerberus } from '@cerberus-design/react'
import { css } from 'styled-system/css'

describe('textGradient utility with PrimitiveFactory', () => {
  test('should work with css prop approach', () => {
    const { container } = render(
      <cerberus.h3
        data-testid="css-prop-approach"
        css={{
          textGradient: 'cerberus.dark.charon-dark',
        }}
      >
        Test with css prop
      </cerberus.h3>,
    )

    const element = container.querySelector('h3')
    expect(element).toBeTruthy()

    // Check that the element has the text gradient class applied
    const classList = element?.className || ''
    expect(classList).toMatch(/text-gradient.*cerberus\.dark\.charon-dark/)
  })

  test('should work with className={css()} approach', () => {
    const { container } = render(
      <cerberus.h3
        data-testid="classname-approach"
        className={css({
          textGradient: 'cerberus.dark.charon-dark',
        })}
      >
        Test with className
      </cerberus.h3>,
    )

    const element = container.querySelector('h3')
    expect(element).toBeTruthy()

    // Check that the element has the text gradient class applied
    const classList = element?.className || ''
    expect(classList).toMatch(/text-gradient.*cerberus\.dark\.charon-dark/)
  })

  test('both approaches should produce equivalent results', () => {
    const { container: cssContainer } = render(
      <cerberus.h3
        css={{
          textGradient: 'cerberus.dark.charon-dark',
        }}
      >
        CSS prop approach
      </cerberus.h3>,
    )

    const { container: classNameContainer } = render(
      <cerberus.h3
        className={css({
          textGradient: 'cerberus.dark.charon-dark',
        })}
      >
        ClassName approach
      </cerberus.h3>,
    )

    const cssElement = cssContainer.querySelector('h3')
    const classNameElement = classNameContainer.querySelector('h3')

    expect(cssElement).toBeTruthy()
    expect(classNameElement).toBeTruthy()

    // Both should have the same text gradient class pattern
    const cssClassList = cssElement?.className || ''
    const classNameClassList = classNameElement?.className || ''

    expect(cssClassList).toMatch(/text-gradient.*cerberus\.dark\.charon-dark/)
    expect(classNameClassList).toMatch(
      /text-gradient.*cerberus\.dark\.charon-dark/,
    )

    // The className should be equivalent (both should contain the text gradient class)
    const cssHasTextGradient = cssClassList.includes('text-gradient')
    const classNameHasTextGradient =
      classNameClassList.includes('text-gradient')

    expect(cssHasTextGradient).toBeTruthy()
    expect(classNameHasTextGradient).toBeTruthy()
  })
})
