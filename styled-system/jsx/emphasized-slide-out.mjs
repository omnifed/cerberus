import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs'
import { getEmphasizedSlideOutStyle } from '../patterns/emphasized-slide-out.mjs'
import { cerberus } from './factory.mjs'

export const EmphasizedSlideOut = /* @__PURE__ */ forwardRef(
  function EmphasizedSlideOut(props, ref) {
    const [patternProps, restProps] = splitProps(props, [])

    const styleProps = getEmphasizedSlideOutStyle(patternProps)
    const mergedProps = { ref, ...styleProps, ...restProps }

    return createElement(cerberus.div, mergedProps)
  },
)
