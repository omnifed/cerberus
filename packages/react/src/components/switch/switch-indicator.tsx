'use client'

import { useCerberusContext } from '../../context/cerberus'

export function SwitchIndicator() {
  const { icons } = useCerberusContext()
  const { toggleChecked: CheckIcon } = icons
  return <CheckIcon />
}
