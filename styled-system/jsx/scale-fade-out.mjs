import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs'
import { getScaleFadeOutStyle } from '../patterns/scale-fade-out.mjs'
import { cerberus } from './factory.mjs'

export const ScaleFadeOut = /* @__PURE__ */ forwardRef(
  function ScaleFadeOut(props, ref) {
    const [patternProps, restProps] = splitProps(props, [])

    const styleProps = getScaleFadeOutStyle(patternProps)
    const mergedProps = { ref, ...styleProps, ...restProps }

    return createElement(cerberus.div, mergedProps)
  },
)
