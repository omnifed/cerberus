import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs'
import { getSlideFadeInStyle } from '../patterns/slide-fade-in.mjs'
import { cerberus } from './factory.mjs'

export const SlideFadeIn = /* @__PURE__ */ forwardRef(
  function SlideFadeIn(props, ref) {
    const [patternProps, restProps] = splitProps(props, [])

    const styleProps = getSlideFadeInStyle(patternProps)
    const mergedProps = { ref, ...styleProps, ...restProps }

    return createElement(cerberus.div, mergedProps)
  },
)
