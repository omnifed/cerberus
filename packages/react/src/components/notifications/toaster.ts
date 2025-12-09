'use client'

import { createToaster, type CreateToasterReturn } from '@ark-ui/react/toast'

export const toaster: CreateToasterReturn = createToaster({
  gap: 16,
  overlap: true,
  placement: 'top-end',
})

export { createToaster } from '@ark-ui/react/toast'
