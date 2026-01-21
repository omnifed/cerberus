import { FileUploadFileError } from '@ark-ui/react'

type FileErrorTypes = {
  tooMany?: string
  invalidType?: string
  tooLarge?: string
  tooSmall?: string
  invalid?: string
  exists?: string
}

/**
 * Helper function to create error messages for file upload errors. Returns a
 * record of FileUploadFileError codes and their corresponding error messages.
 * @returns Record<FileUploadFileError, string>
 */
export function createErrorMessages(
  options: FileErrorTypes,
): Record<FileUploadFileError, string> {
  return {
    TOO_MANY_FILES: options.tooMany || '📊 Too many files selected',
    FILE_INVALID_TYPE: options.invalidType || '🚫 Invalid file type',
    FILE_TOO_LARGE: options.tooLarge || '📏 File too large',
    FILE_TOO_SMALL: options.tooSmall || '📐 File too small',
    FILE_INVALID: options.invalid || '⚠️ Invalid file',
    FILE_EXISTS: options.exists || '🔄 File already exists',
  }
}
