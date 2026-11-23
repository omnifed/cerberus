import { FileUploadRootProps } from '@ark-ui/react'
import { isValidElement, type ReactNode } from 'react'

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

/**
 * Collect the plain text of a React node: strings and numbers as-is, the
 * children of elements recursively, nothing for booleans, null and undefined.
 * Text a component renders internally (not given as children) is not
 * reachable and is skipped.
 * @param node ReactNode
 * @returns string (whitespace collapsed and trimmed)
 */
export function getNodeText(node: ReactNode): string {
  return collectNodeText(node).replace(/\s+/g, ' ').trim()
}

function collectNodeText(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (typeof node === 'bigint') return node.toString()
  if (Array.isArray(node)) return node.map(collectNodeText).join('')
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return collectNodeText(node.props.children)
  }
  return ''
}
