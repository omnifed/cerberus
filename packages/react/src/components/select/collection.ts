import {
  createListCollection,
  type ListCollection,
} from '@ark-ui/react/collection'

/**
 * This module contains the Cerberus select collection item shape and helper.
 * @module 'react/select/collection'
 */

export interface SelectCollectionItem {
  /**
   * What is displayed in the dropdown list.
   */
  label: string
  /**
   * The value of the selected item used in the form.
   */
  value: string
  /**
   * If the item is disabled.
   */
  disabled?: boolean
}

export interface SelectCollection {
  /**
   * The items to be displayed in the dropdown list.
   */
  items: SelectCollectionItem[]
}

/**
 * A helper function to create a SelectCollection object.
 * @param collection - An array of SelectCollectionItem objects that matches
 * the following shape:
 * ```ts
 * [{ label: 'Hades', value: 'hades', disabled?: true }]
 * ```
 */
export function createSelectCollection(
  collection: SelectCollectionItem[],
): ListCollection<SelectCollectionItem> {
  return createListCollection({
    items: collection,
  })
}
