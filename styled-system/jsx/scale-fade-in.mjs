import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs'
import { getScaleFadeInStyle } from '../patterns/scale-fade-in.mjs'
import { cerberus } from './factory.mjs'

export const ScaleFadeIn = /* @__PURE__ */ forwardRef(
  function ScaleFadeIn(props, ref) {
    const [patternProps, restProps] = splitProps(props, [])

    const styleProps = getScaleFadeInStyle(patternProps)
    const mergedProps = { ref, ...styleProps, ...restProps }

    return createElement(cerberus.div, mergedProps)
  },
)
