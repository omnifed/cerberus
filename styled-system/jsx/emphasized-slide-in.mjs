import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs'
import { getEmphasizedSlideInStyle } from '../patterns/emphasized-slide-in.mjs'
import { cerberus } from './factory.mjs'

export const EmphasizedSlideIn = /* @__PURE__ */ forwardRef(
  function EmphasizedSlideIn(props, ref) {
    const [patternProps, restProps] = splitProps(props, [])

    const styleProps = getEmphasizedSlideInStyle(patternProps)
    const mergedProps = { ref, ...styleProps, ...restProps }

    return createElement(cerberus.div, mergedProps)
  },
)
