'use client'

import { useCallback, useMemo, useState } from 'react'
import {
  createListCollection,
  type ListCollection,
} from '@ark-ui/react/collection'
import type { ComboboxInputValueChangeDetails } from '@ark-ui/react/combobox'
import type { SelectCollectionItem } from '../select/collection'

/**
 * This module contains a custom hook that provides a stateful collection for
 * the Combobox component.
 */

export interface StatefulCollectionReturn {
  /**
   * The collection of items.
   */
  collection: ListCollection<SelectCollectionItem>
  /**
   * The filter value split into an array of characters.
   */
  filterChars: string[]
  /**
   * The function to handle input changes.
   */
  handleInputChange: (details: ComboboxInputValueChangeDetails) => void
}

/**
 * This hook provides a stateful collection for the Combobox component.
 * It returns a collection of items and a function to handle input changes.
 * @param initialItems - The initial collection of items.
 * @return An object containing the collection and a function to handle input changes.
 */
export function useStatefulCollection(
  initialItems: SelectCollectionItem[] = [],
): StatefulCollectionReturn {
  const [items, setItems] = useState(initialItems)
  const [filterValue, setFilterValue] = useState<string[]>([])

  const collection = useMemo(() => createListCollection({ items }), [items])

  const handleInputChange = useCallback(
    (details: ComboboxInputValueChangeDetails) => {
      if (details.inputValue === '') {
        setFilterValue([])
        return setItems(initialItems)
      }
      // Filter the initial items, not the last result, so a query that is
      // edited (not only extended) finds items the previous query excluded
      const query = details.inputValue.toLowerCase()
      setItems(
        initialItems.filter(
          (item) =>
            item.value.toLowerCase().includes(query) ||
            item.label.toLowerCase().includes(query),
        ),
      )
      setFilterValue(details.inputValue.split(''))
    },
    [initialItems],
  )

  return useMemo(
    () => ({
      collection,
      filterChars: filterValue,
      handleInputChange,
    }),
    [collection, filterValue, handleInputChange],
  )
}
