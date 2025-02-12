'use client'

import { useMemo, useState } from 'react'
import type { ComboboxInputValueChangeDetails } from '@ark-ui/react/combobox'
import type { SelectCollectionItem } from '../select/select'
import { createSelectCollection } from '../select/primitives'

/**
 * This module contains a custom hook that provides a stateful collection for
 * the Combobox component.
 */

export interface StatefulCollectionReturn {
  /**
   * The collection of items.
   */
  collection: ReturnType<typeof createSelectCollection>
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

  const collection = useMemo(() => createSelectCollection(items), [items])

  const handleInputChange = (details: ComboboxInputValueChangeDetails) => {
    if (details.inputValue === '') {
      return setItems(initialItems)
    }
    setItems((prev) =>
      prev.filter((item) =>
        item.value.includes(details.inputValue.toLowerCase()),
      ),
    )
  }

  return {
    collection,
    handleInputChange,
  }
}
