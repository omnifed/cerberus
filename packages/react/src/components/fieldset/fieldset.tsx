'use client'

import type { ReactNode } from 'react'
import { extractParts } from '../../internal/extract-parts'
import { splitProps } from '../../utils/index'
import {
  FieldsetErrorText,
  FieldsetHelperText,
  FieldsetLegend,
  FieldsetRoot,
  type FieldsetRootProps,
} from './primitives'

/**
 * This module contains the Fieldset abstraction.
 * @module Fieldset
 */

const PARTS = {
  legend: FieldsetLegend,
  helperText: FieldsetHelperText,
  errorText: FieldsetErrorText,
}

export type FieldsetProps = FieldsetRootProps & {
  /**
   * The legend/title/label of the fieldset group.
   */
  legend?: ReactNode
  /**
   * The description text for the fieldset group.
   */
  helperText?: ReactNode
  /**
   * The error text for the fieldset group shown when the fieldset is invalid.
   */
  errorText?: ReactNode
}

/**
 * A component used for grouping related fields in a form that is an
 * abstraction of the Fieldset primitives. It renders the legend, the helper
 * text, the grouped fields (its children) and the error text, which only
 * shows when the fieldset is `invalid`. Direct `Fieldset.Legend`,
 * `Fieldset.HelperText` and `Fieldset.ErrorText` children override that part.
 * @description [Fieldset Docs](https://cerberus.digitalu.design/docs/components/fieldset)
 * @description [Primitive Docs](https://ark-ui.com/react/docs/components/fieldset)
 */
export function FieldsetEl(props: FieldsetProps) {
  const [localProps, rootProps] = splitProps(props, [
    'legend',
    'helperText',
    'errorText',
    'children',
  ])

  const { parts, content } = extractParts(localProps.children, PARTS)

  const { children: legendChildren, ...legendOverrideProps } =
    parts.legend ?? {}
  const { children: helperTextChildren, ...helperTextOverrideProps } =
    parts.helperText ?? {}
  const { children: errorTextChildren, ...errorTextOverrideProps } =
    parts.errorText ?? {}

  return (
    <FieldsetRoot {...rootProps}>
      <FieldsetLegend {...legendOverrideProps}>
        {legendChildren ?? localProps.legend}
      </FieldsetLegend>
      <FieldsetHelperText {...helperTextOverrideProps}>
        {helperTextChildren ?? localProps.helperText}
      </FieldsetHelperText>

      {content}

      <FieldsetErrorText {...errorTextOverrideProps}>
        {errorTextChildren ?? localProps.errorText}
      </FieldsetErrorText>
    </FieldsetRoot>
  )
}
