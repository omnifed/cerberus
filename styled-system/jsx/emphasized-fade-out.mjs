import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs'
import { getEmphasizedFadeOutStyle } from '../patterns/emphasized-fade-out.mjs'
import { cerberus } from './factory.mjs'

export const EmphasizedFadeOut = /* @__PURE__ */ forwardRef(
  function EmphasizedFadeOut(props, ref) {
    const [patternProps, restProps] = splitProps(props, [])

    const styleProps = getEmphasizedFadeOutStyle(patternProps)
    const mergedProps = { ref, ...styleProps, ...restProps }

    return createElement(cerberus.div, mergedProps)
  },
)
