import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs'
import { getEmphasizedFadeInStyle } from '../patterns/emphasized-fade-in.mjs'
import { cerberus } from './factory.mjs'

export const EmphasizedFadeIn = /* @__PURE__ */ forwardRef(
  function EmphasizedFadeIn(props, ref) {
    const [patternProps, restProps] = splitProps(props, [])

    const styleProps = getEmphasizedFadeInStyle(patternProps)
    const mergedProps = { ref, ...styleProps, ...restProps }

    return createElement(cerberus.div, mergedProps)
  },
)
