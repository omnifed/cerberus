import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs'
import { getAnimateInStyle } from '../patterns/animate-in.mjs'
import { cerberus } from './factory.mjs'

export const AnimateIn = /* @__PURE__ */ forwardRef(
  function AnimateIn(props, ref) {
    const [patternProps, restProps] = splitProps(props, ['delay'])

    const styleProps = getAnimateInStyle(patternProps)
    const mergedProps = { ref, ...styleProps, ...restProps }

    return createElement(cerberus.div, mergedProps)
  },
)
