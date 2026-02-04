import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { FileUploader, CerberusProvider } from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('FileUploader', () => {
  const config = makeConfig()

  test('should render a file uploader', () => {
    render(
      <CerberusProvider config={config}>
        <FileUploader
          accept=".csv,.docx"
          heading="Upload Files"
          name="basic-example"
        />
      </CerberusProvider>,
    )

    expect(screen.getByText(/upload files/i)).toBeInTheDocument()
    expect(screen.getByText(/import .csv, .docx files/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Drag and drop files or click to upload/i),
    ).toBeInTheDocument()
  })

  test('should allow custom preview', () => {
    render(
      <CerberusProvider config={config}>
        <FileUploader
          accept="image/*"
          heading="Upload Files"
          name="basic-example"
          showPreview={false}
        >
          <div>Custom Preview</div>
        </FileUploader>
      </CerberusProvider>,
    )

    expect(screen.getByText(/upload files/i)).toBeInTheDocument()
    expect(screen.getByText(/import any image file/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Drag and drop files or click to upload/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/custom preview/i)).toBeInTheDocument()
  })

  test('should show proper grammer if no accept given', () => {
    render(
      <CerberusProvider config={config}>
        <FileUploader heading="Upload Files" name="basic-example" />
      </CerberusProvider>,
    )

    expect(screen.getByText(/upload files/i)).toBeInTheDocument()
    expect(screen.getByText(/import any file/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Drag and drop files or click to upload/i),
    ).toBeInTheDocument()
  })
})
