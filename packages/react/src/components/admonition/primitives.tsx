import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { cx } from '@cerberus/styled-system/css'
import {
  admonition,
  type AdmonitionVariantProps,
} from '@cerberus/styled-system/recipes'

/**
 * This module contains the primitives of the Admonition components.
 * @module 'admonition/primitives'
 */

/**
 * The `AdmonitionRoot` component is the container for the Admonition.
 */
export function AdmonitionRoot(
  props: HTMLArkProps<'aside'> & AdmonitionVariantProps,
) {
  const { palette, usage, ...nativeProps } = props
  const styles = admonition({ palette, usage })
  return (
    <ark.aside
      {...nativeProps}
      className={cx(styles.root, nativeProps.className)}
      data-scope="admonition"
      data-part="root"
    />
  )
}

/**
 * The `AdmonitionIndicator` component is the indicator for the Admonition.
 */
export function AdmonitionIndicator(props: HTMLArkProps<'span'>) {
  return <ark.span {...props} data-scope="admonition" data-part="indicator" />
}

/**
 * The `AdmonitionContent` component is the content for the Admonition.
 */
export function AdmonitionContent(props: HTMLArkProps<'div'>) {
  return <ark.div {...props} data-scope="admonition" data-part="content" />
}

/**
 * The `AdmonitionHeading` component is the heading title for the Admonition.
 */
export function AdmonitionHeading(props: HTMLArkProps<'p'>) {
  const styles = admonition()
  return (
    <ark.p
      {...props}
      className={cx(styles.heading, props.className)}
      data-scope="admonition"
      data-part="heading"
    />
  )
}

/**
 * The `AdmonitionDescription` component is the description for the Admonition.
 */
export function AdmonitionDescription(props: HTMLArkProps<'p'>) {
  const styles = admonition()
  return (
    <ark.p
      {...props}
      className={cx(styles.description, props.className)}
      data-scope="admonition"
      data-part="description"
    />
  )
}
