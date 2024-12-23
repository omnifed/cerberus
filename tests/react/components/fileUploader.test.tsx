import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { FileUploader, CerberusProvider } from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('FileUploader', () => {
  setupStrictMode()
  afterEach(cleanup)

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

    expect(screen.getByText(/upload files/i)).toBeTruthy()
    expect(screen.getByText(/import .csv, .docx files/i)).toBeTruthy()
    expect(screen.getByText(/click to select files/i)).toBeTruthy()
    expect(screen.getByLabelText(/upload files/i)).toBeTruthy()
  })

  test('should render a file uploader with hidden heading', () => {
    render(<FileUploader accept=".csv,.doc" name="no-heading" />)

    expect(screen.queryByText(/upload files/i)).toBeNull()
    expect(screen.getByText(/import .csv, .doc files/i)).toBeTruthy()
    expect(screen.getByText(/click to select files/i)).toBeTruthy()
  })
})
