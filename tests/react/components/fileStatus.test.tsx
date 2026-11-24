import { afterEach, describe, test, expect, jest } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  FileStatus,
  processStatus,
  CerberusProvider,
} from '@cerberus-design/react'
import { FileStatus as FileStatusSubpath } from '@cerberus-design/react/file-status'
import { describeDXContract } from '@/test-utils/dx-harness'
import { makeConfig } from '@/utils'
import userEvent from '@testing-library/user-event'

const noop = () => {}

describeDXContract({
  name: 'FileStatus',
  // <FileStatus> renders its own Root: wrap it in a plain element
  Root: ({ unstyled: _unstyled, ...props }: Record<string, unknown>) => (
    <div {...props} />
  ),
  abstractions: [
    {
      name: 'FileStatus',
      Component: FileStatus,
      defaultProps: {
        id: 'dx',
        file: 'dx.txt',
        now: 10,
        status: processStatus.PROCESSING,
        onClick: noop,
      },
      children: 'Content body',
      PartToPatch: FileStatus.Name,
      PartToReplace: FileStatus.Icon,
    },
  ],
})

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

describe('FileStatus compound', () => {
  const config = makeConfig()
  afterEach(cleanup)

  const renderStatus = (
    status: processStatus,
    children?: React.ReactNode,
    onClick: (action: string) => void = noop,
  ) =>
    render(
      <CerberusProvider config={config}>
        <FileStatus
          id="report"
          file="report.pdf"
          now={40}
          status={status}
          onClick={(action) => onClick(action)}
          data-testid="root"
        >
          {children}
        </FileStatus>
      </CerberusProvider>,
    )

  test('is the same compound from the package and its subpath', () => {
    expect(FileStatusSubpath).toBe(FileStatus)
    expect(FileStatus.El).toBe(FileStatus)
  })

  test('renders every layer with its data-scope/data-part and the status', () => {
    renderStatus(processStatus.PROCESSING)
    const root = screen.getByTestId('root')
    expect(root).toHaveAttribute('data-scope', 'file-status')
    expect(root).toHaveAttribute('data-part', 'root')
    expect(root).toHaveAttribute('data-status', 'processing')
    expect(root.className).toContain('cerberus-file-status__root')
    for (const part of ['icon', 'info', 'name', 'status-text']) {
      expect(root.querySelector(`[data-part="${part}"]`)).not.toBeNull()
    }
    expect(screen.getByText('report.pdf').tagName).toBe('SMALL')
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-label',
      'File upload status',
    )
  })

  test('the root and the progress bar get distinct ids', () => {
    renderStatus(processStatus.PROCESSING)
    expect(screen.getByTestId('root')).toHaveAttribute('id', 'report')
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'id',
      'progress:report',
    )
  })

  test.each([
    [processStatus.TODO, 'Cancel', 'cancel', 'danger'],
    [processStatus.PROCESSING, 'Cancel', 'cancel', 'danger'],
    [processStatus.ERROR, 'Retry', 'retry', 'action'],
    [processStatus.DONE, 'Delete', 'delete', 'danger'],
  ])(
    '%s: the action is "%s" and reports "%s"',
    async (status, label, action, palette) => {
      const calls: string[] = []
      renderStatus(status, undefined, (a) => calls.push(a))
      const button = screen.getByRole('button', { name: label })
      expect(button.className).toContain(`palette_${palette}`)
      await userEvent.click(button)
      expect(calls).toEqual([action])
    },
  )

  test('part children patch or replace their part', () => {
    renderStatus(
      processStatus.DONE,
      <>
        <FileStatus.StatusText>Envoyé</FileStatus.StatusText>
        <FileStatus.Progress label="Progression" />
        <FileStatus.Action ariaLabel="Supprimer" data-testid="action" />
        <span>Extra detail</span>
      </>,
    )
    expect(screen.getByText('Envoyé')).toHaveAttribute(
      'data-part',
      'status-text',
    )
    expect(screen.queryByText(/file uploaded successfully/i)).toBeNull()
    // The patched progress keeps the card's id and value
    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-label', 'Progression')
    expect(bar).toHaveAttribute('aria-valuenow', '40')
    expect(screen.getByRole('button', { name: 'Supprimer' })).toHaveAttribute(
      'data-testid',
      'action',
    )
    // Other children render at the end of the info column
    const info = screen.getByTestId('root').querySelector('[data-part="info"]')
    expect(info?.lastElementChild?.textContent).toBe('Extra detail')
  })

  test('Progress and Action work on their own', () => {
    render(
      <CerberusProvider config={config}>
        <FileStatus.Progress now={25} />
        <FileStatus.Action status={processStatus.ERROR} />
      </CerberusProvider>,
    )
    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-label', 'File upload status')
    expect(bar.id).not.toBe('')
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument()
  })
})
