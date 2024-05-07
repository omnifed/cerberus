import { configure } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

export const user = userEvent.setup()

export function setupStrictMode() {
  configure({ reactStrictMode: true })
}
