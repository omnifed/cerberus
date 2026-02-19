import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs'
import { getSlideFadeOutStyle } from '../patterns/slide-fade-out.mjs'
import { cerberus } from './factory.mjs'

export const SlideFadeOut = /* @__PURE__ */ forwardRef(
  function SlideFadeOut(props, ref) {
    const [patternProps, restProps] = splitProps(props, [])

    const styleProps = getSlideFadeOutStyle(patternProps)
    const mergedProps = { ref, ...styleProps, ...restProps }

    return createElement(cerberus.div, mergedProps)
  },
)
