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
    expect(screen.getByText(/click to select files/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/upload files/i)).toBeInTheDocument()
  })

  test('should render a file uploader with hidden heading', () => {
    render(
      <CerberusProvider config={config}>
        <FileUploader accept=".csv,.doc" name="no-heading" />
      </CerberusProvider>,
    )

    expect(screen.queryByText(/upload files/i)).not.toBeInTheDocument()
    expect(screen.getByText(/import .csv, .doc files/i)).toBeInTheDocument()
    expect(screen.getByText(/click to select files/i)).toBeInTheDocument()
  })
})
