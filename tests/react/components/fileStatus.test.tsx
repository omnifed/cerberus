import { describe, test, expect, afterEach, jest } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  FileStatus,
  processStatus,
  CerberusProvider,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('FileStatus', () => {
  setupStrictMode()
  afterEach(cleanup)

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
    expect(screen.getByText(/file.txt/i)).toBeTruthy()
    expect(screen.getByText(/waiting to upload/i)).toBeTruthy()
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
    expect(screen.getByText(/file.txt/i)).toBeTruthy()
    expect(screen.getByText(/50% complete/i)).toBeTruthy()
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
    expect(screen.getByText(/file.txt/i)).toBeTruthy()
    expect(screen.getByText(/file uploaded successfully/i)).toBeTruthy()
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
    expect(screen.getByText(/file.txt/i)).toBeTruthy()
    expect(
      screen.getByText(/There was an error uploading the file/i),
    ).toBeTruthy()
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
    expect(screen.getByText(/file.txt/i)).toBeTruthy()
    expect(screen.getByText(/waiting to upload/i)).toBeTruthy()
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })
})
