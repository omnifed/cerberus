'use client'

import {
  createErrorMessages,
  FileUploader,
  FileUploadParts,
  Text,
  type UseFileUploadContext,
} from '@cerberus-design/react'

const errorMessages = createErrorMessages({
  tooMany: '📊 Too many files selected (max 3 allowed)',
  invalidType: '🚫 Invalid file type (only images and PDFs allowed)',
  tooLarge: '📏 File too large (max 1MB)',
  tooSmall: '📐 File too small (min 1KB)',
  invalid: '⚠️ Invalid file',
  exists: '🔄 File already exists',
})

export function ErrorHandlingDemo() {
  return (
    <FileUploader
      maxFiles={3}
      maxFileSize={1024 * 1024} // 1MB
      minFileSize={1024} // 1KB
      accept="image/*,application/pdf"
      showPreview={false}
    >
      <div data-status="rejected">
        <Text textStyle="heading-md">❌ Rejected Files</Text>

        <FileUploadParts.ItemGroup>
          <FileUploadParts.Context>
            {({ rejectedFiles }: UseFileUploadContext) =>
              rejectedFiles.length === 0 ? (
                <Text>No rejected files</Text>
              ) : (
                rejectedFiles.map((fileRejection) => (
                  <FileUploadParts.Item
                    key={fileRejection.file.name}
                    file={fileRejection.file}
                    data-status="rejected"
                  >
                    <FileUploadParts.ItemName />
                    <FileUploadParts.ItemSizeText />
                    <div>
                      <Text as="strong">Validation Errors:</Text>
                      {fileRejection.errors.map((error, index) => (
                        <div key={index} data-error-code={error}>
                          {errorMessages[error] || `❓ ${error}`}
                        </div>
                      ))}
                    </div>
                  </FileUploadParts.Item>
                ))
              )
            }
          </FileUploadParts.Context>
        </FileUploadParts.ItemGroup>
      </div>
    </FileUploader>
  )
}
