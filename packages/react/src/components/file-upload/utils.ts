import { FileUploadRootProps } from '@ark-ui/react'

/**
 * Format a given file type string into a human-readable format.
 * @param accept FileUploadRootProps['accept']
 * @returns string (e.g., ".png, .jpg, .svg")
 */
export function formatFileTypes(accept: FileUploadRootProps['accept']): string {
  if (Array.isArray(accept)) return accept.join(', ')
  if (typeof accept === 'object') return Object.keys(accept).join(', ')

  if (typeof accept === 'string') {
    if (accept.includes('/*')) {
      return `any ${accept.split('/')[0]}`
    }
    return accept.split(',').join(', ')
  }

  return 'any'
}
