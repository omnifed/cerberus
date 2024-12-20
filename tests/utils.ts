import { cerberusIcons } from '@cerberus-design/icons'
import { defineIcons, makeSystemConfig } from '@cerberus-design/react'
import { configure } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

export const user = userEvent.setup()

export function setupStrictMode() {
  configure({ reactStrictMode: true })
}

export function makeConfig() {
  const icons = defineIcons(cerberusIcons)
  return makeSystemConfig({ icons })
}
