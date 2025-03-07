import { describe, test, expect, jest } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  FileStatus,
  processStatus,
  CerberusProvider,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('FileStatus', () => {
  const config = makeConfig()

  test('should render a file status', () => {
    render(
      <CerberusProvider config={config}>
        <FileStatus
          id="test"
          file="file.txt"
          now={0}
          status={processStatus.TODO}
          onClick={jest.fn()}
        />
      </CerberusProvider>,
    )
    expect(screen.getByText(/file.txt/i)).toBeInTheDocument()
    expect(screen.getByText(/waiting to upload/i)).toBeInTheDocument()
  })

  test('should render a processing file status', () => {
    render(
      <CerberusProvider config={config}>
        <FileStatus
          id="test"
          file="file.txt"
          now={50}
          status={processStatus.PROCESSING}
          onClick={jest.fn()}
        />
      </CerberusProvider>,
    )
    expect(screen.getByText(/file.txt/i)).toBeInTheDocument()
    expect(screen.getByText(/50% complete/i)).toBeInTheDocument()
  })

  test('should render a done file status', () => {
    render(
      <CerberusProvider config={config}>
        <FileStatus
          id="test"
          file="file.txt"
          now={100}
          status={processStatus.DONE}
          onClick={jest.fn()}
        />
      </CerberusProvider>,
    )
    expect(screen.getByText(/file.txt/i)).toBeInTheDocument()
    expect(screen.getByText(/file uploaded successfully/i)).toBeInTheDocument()
  })

  test('should render an error file status', () => {
    render(
      <CerberusProvider config={config}>
        <FileStatus
          id="test"
          file="file.txt"
          now={0}
          status={processStatus.ERROR}
          onClick={jest.fn()}
        />
      </CerberusProvider>,
    )
    expect(screen.getByText(/file.txt/i)).toBeInTheDocument()
    expect(
      screen.getByText(/There was an error uploading the file/i),
    ).toBeInTheDocument()
  })

  test('should render a file status with an action', async () => {
    const handleClick = jest.fn()
    render(
      <CerberusProvider config={config}>
        <FileStatus
          id="test"
          file="file.txt"
          now={0}
          status={processStatus.TODO}
          onClick={handleClick}
        />
      </CerberusProvider>,
    )
    expect(screen.getByText(/file.txt/i)).toBeInTheDocument()
    expect(screen.getByText(/waiting to upload/i)).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })
})
