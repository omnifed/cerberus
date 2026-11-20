'use client'

import { cx } from 'styled-system/css'
import { slider } from 'styled-system/recipes'
import { cerberus } from '../../system/index'
import type { CerberusProps } from '../../system/types'

// `markerIndicator` is a Cerberus slot outside Ark's anatomy, and its styles
// don't depend on any variant, so the recipe's base class is enough
const indicatorClass = slider().markerIndicator

export type SliderMarkerIndicatorProps = CerberusProps<'div'>

/**
 * The dot rendered inside a `Slider.Marker`, styled by the slider recipe's
 * `markerIndicator` slot. It accepts style props, `css` and `asChild`.
 * @description [Cerberus Docs] https://cerberus.digitalu.design/docs/components/slider
 */
export function SliderMarkerIndicator(props: SliderMarkerIndicatorProps) {
  const { className, ...rest } = props
  return <cerberus.div {...rest} className={cx(indicatorClass, className)} />
}
