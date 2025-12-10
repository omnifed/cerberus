'use client'

import { createToaster, type CreateToasterReturn } from '@ark-ui/react/toast'

export const toaster: CreateToasterReturn = createToaster({
  gap: 16,
  overlap: true,
  placement: 'top-end',
})

// Re-exporting for easier customization

export { createToaster, Toaster } from '@ark-ui/react/toast'
