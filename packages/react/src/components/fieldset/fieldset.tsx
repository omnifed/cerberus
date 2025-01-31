import type { FieldsetRootProps } from '@ark-ui/react'
import { splitProps } from '../../utils'
import { FieldsetParts } from './parts'

/**
 * This module contains the Fieldset component.
 * @module Fieldset
 */

export interface FieldsetProps extends FieldsetRootProps {
  /**
   * The legend/title/label of the fieldset group.
   */
  legend?: string
  /**
   * The description text for the fieldset group.
   */
  helperText?: string
  /**
   * The error text for the fieldset group shown when the field is invalid.
   */
  errorText?: string
}

/**
 * A component used for grouping related fields in a form that is an
 * abstraction of the Fieldset primitives.
 * @description [Fieldset Docs](https://cerberus.digitalu.design/react/fieldset)
 * @description [Primitive Docs](https://ark-ui.com/react/docs/components/fieldset)
 */
export function Fieldset(props: FieldsetProps) {
  const [fieldsetProps, rootProps] = splitProps(props, [
    'legend',
    'helperText',
    'errorText',
    'children',
  ])

  return (
    <FieldsetParts.Root {...rootProps}>
      <FieldsetParts.Legend>{fieldsetProps.legend}</FieldsetParts.Legend>
      <FieldsetParts.HelperText>
        {fieldsetProps.helperText}
      </FieldsetParts.HelperText>

      {fieldsetProps.children}

      <FieldsetParts.ErrorText>
        {fieldsetProps.errorText}
      </FieldsetParts.ErrorText>
    </FieldsetParts.Root>
  )
}
