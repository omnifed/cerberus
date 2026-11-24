import { describe, test, expect } from 'bun:test'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  FileUpload,
  FileUploader,
  ImgPreview,
  CerberusProvider,
  useFileUpload,
  createErrorMessages,
  type FileUploadProps,
  type FileUploaderProps,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('FileUpload', () => {
  const config = makeConfig()

  function Test(props: FileUploadProps) {
    return (
      <CerberusProvider config={config}>
        <FileUpload {...props} />
      </CerberusProvider>
    )
  }

  const getHiddenInput = (container: HTMLElement) =>
    container.querySelector<HTMLInputElement>('input[type="file"]')!

  test('should render a file uploader', () => {
    render(<Test accept=".csv,.docx" heading="Upload Files" name="basic" />)

    expect(screen.getByText(/upload files/i)).toBeInTheDocument()
    expect(screen.getByText(/import .csv, .docx files/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Drag and drop files or click to upload/i),
    ).toBeInTheDocument()
  })

  test('should render the default parts', () => {
    const { container } = render(
      <Test accept="image/*" heading="Upload Files" name="parts" />,
    )

    const root = container.querySelector('[data-scope="file-upload"]')
    expect(root).toHaveClass('cerberus-file-uploader__root')
    const dropzone = screen.getByRole('button', {
      name: 'Upload Files Import any image files Drag and drop files or click to upload',
    })
    expect(dropzone).toHaveClass('cerberus-file-uploader__dropzone')
    expect(dropzone).toHaveAttribute('tabindex', '0')
    expect(dropzone.querySelector('[data-part="icon"]')).toHaveClass(
      'cerberus-file-uploader__icon',
    )
    expect(screen.getByText('Upload Files')).toHaveClass(
      'cerberus-file-uploader__heading',
    )
    expect(
      screen.getByText(/Drag and drop files or click to upload/i),
    ).toHaveClass('cerberus-file-uploader__description')
    // The preview item group renders by default
    expect(container.querySelector('[data-part="item-group"]')).toHaveClass(
      'cerberus-file-uploader__itemGroup',
    )
    const input = getHiddenInput(container)
    expect(input).toHaveAttribute('name', 'parts')
    expect(input).toHaveAttribute('accept', 'image/*')
    // Label and ClearTrigger render only when given
    expect(container.querySelector('[data-part="label"]')).toBeNull()
    expect(container.querySelector('[data-part="clear-trigger"]')).toBeNull()
  })

  test('should not render a heading without one', () => {
    const { container } = render(<Test name="no-heading" />)
    expect(container.querySelector('[data-part="heading"]')).toBeNull()
  })

  test('should allow custom preview', () => {
    const { container } = render(
      <Test
        accept="image/*"
        heading="Upload Files"
        name="basic-example"
        showPreview={false}
      >
        <div>Custom Preview</div>
      </Test>,
    )

    expect(screen.getByText(/upload files/i)).toBeInTheDocument()
    expect(screen.getByText(/import any image file/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Drag and drop files or click to upload/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/custom preview/i)).toBeInTheDocument()
    expect(container.querySelector('[data-part="item-group"]')).toBeNull()
  })

  test('should show proper grammer if no accept given', () => {
    render(<Test heading="Upload Files" name="basic-example" />)

    expect(screen.getByText(/upload files/i)).toBeInTheDocument()
    expect(screen.getByText(/import any file/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Drag and drop files or click to upload/i),
    ).toBeInTheDocument()
  })

  test('should apply direct part children as overrides', () => {
    const { container } = render(
      <Test accept="image/*" heading="Default heading" name="override">
        <FileUpload.Label>Your avatar</FileUpload.Label>
        <FileUpload.Dropzone data-testid="dropzone" />
        <FileUpload.Icon data-testid="icon">
          <span>custom icon</span>
        </FileUpload.Icon>
        <FileUpload.Heading data-testid="heading">
          Custom heading
        </FileUpload.Heading>
        <FileUpload.Description>Custom description</FileUpload.Description>
        <FileUpload.ClearTrigger>Clear all</FileUpload.ClearTrigger>
        <FileUpload.HiddenInput data-testid="input" />
      </Test>,
    )

    expect(screen.getByText('Your avatar')).toHaveAttribute(
      'for',
      getHiddenInput(container).id,
    )
    const dropzone = screen.getByTestId('dropzone')
    expect(dropzone).toHaveClass('cerberus-file-uploader__dropzone')
    // A self-closing part child patches props and keeps the default content
    expect(dropzone).toHaveTextContent(/import any image files/i)
    expect(screen.getByTestId('icon')).toHaveTextContent('custom icon')
    expect(screen.getByTestId('heading')).toHaveTextContent('Custom heading')
    expect(screen.queryByText('Default heading')).toBeNull()
    expect(screen.getByText('Custom description')).toHaveClass(
      'cerberus-file-uploader__description',
    )
    expect(
      screen.queryByText(/Drag and drop files or click to upload/i),
    ).toBeNull()
    expect(
      container.querySelector('[data-part="clear-trigger"]'),
    ).toHaveTextContent('Clear all')
    expect(screen.getByTestId('input')).toBe(getHiddenInput(container))
    // Part children are not rendered again as content
    expect(screen.getAllByText('Custom heading')).toHaveLength(1)
  })

  test('should replace the dropzone content with a dropzone child with children', () => {
    render(
      <Test name="dropzone-children" heading="Gone">
        <FileUpload.Dropzone>Drop it here</FileUpload.Dropzone>
      </Test>,
    )
    // The accessible name follows the replaced content
    expect(
      screen.getByRole('button', { name: 'Drop it here' }),
    ).toHaveTextContent('Drop it here')
    expect(screen.queryByText('Gone')).toBeNull()
    expect(screen.queryByText(/import any files/i)).toBeNull()
  })

  describe('dropzone accessible name', () => {
    // The visible text of the dropzone, one entry per rendered text block
    const getVisibleText = (dropzone: HTMLElement) => {
      const heading = dropzone.querySelector('[data-part="heading"]')
      const description = dropzone.querySelector('[data-part="description"]')!
      const importText = Array.from(description.parentElement!.childNodes)
        .filter((node) => node.nodeType === Node.TEXT_NODE)
        .map((node) => node.textContent)
        .join('')
      return [heading?.textContent, importText, description.textContent]
        .filter(Boolean)
        .join(' ')
    }

    test('should match the visible text by default', () => {
      render(<Test accept=".csv,.docx" heading="Upload Files" name="name" />)
      const dropzone = screen.getByRole('button', {
        name: 'Upload Files Import .csv, .docx files Drag and drop files or click to upload',
      })
      expect(dropzone).toHaveAttribute('aria-label', getVisibleText(dropzone))
      expect(screen.queryByRole('button', { name: 'dropzone' })).toBeNull()
    })

    test('should match the visible text without a heading', () => {
      render(<Test name="no-heading-name" />)
      const dropzone = screen.getByRole('button', {
        name: 'Import any files Drag and drop files or click to upload',
      })
      expect(dropzone).toHaveAttribute('aria-label', getVisibleText(dropzone))
    })

    test('should follow heading and description part overrides', () => {
      render(
        <Test accept="image/*" heading="Ignored" name="override-name">
          <FileUpload.Heading>
            Your <strong>avatar</strong>
          </FileUpload.Heading>
          <FileUpload.Description>PNG up to {2}MB</FileUpload.Description>
        </Test>,
      )
      const dropzone = screen.getByRole('button', {
        name: 'Your avatar Import any image files PNG up to 2MB',
      })
      expect(dropzone).toHaveAttribute('aria-label', getVisibleText(dropzone))
    })

    test('should let a user translations.dropzone win', () => {
      render(
        <Test
          heading="Upload Files"
          name="user-name"
          translations={{ dropzone: 'Upload your reports' }}
        />,
      )
      expect(
        screen.getByRole('button', { name: 'Upload your reports' }),
      ).toBeInTheDocument()
    })

    test('should keep the other user translations', async () => {
      const user = userEvent.setup()
      const file = new File(['x'], 'ares.png', { type: 'image/png' })
      const { container } = render(
        <Test
          accept="image/*"
          heading="Upload Files"
          name="other-translations"
          translations={{
            deleteFile: (f) => `remove ${f.name}`,
            itemPreview: (f) => `thumbnail of ${f.name}`,
          }}
        />,
      )

      // The dropzone still gets its default name
      expect(
        screen.getByRole('button', {
          name: 'Upload Files Import any image files Drag and drop files or click to upload',
        }),
      ).toBeInTheDocument()

      await user.upload(getHiddenInput(container), file)

      expect(
        await screen.findByRole('button', { name: 'remove ares.png' }),
      ).toBeInTheDocument()
      expect(
        await screen.findByAltText('thumbnail of ares.png'),
      ).toBeInTheDocument()
    })
  })

  test('should render the abstraction from FileUpload.El', () => {
    render(
      <CerberusProvider config={config}>
        <FileUpload.El name="el" heading="From El" />
      </CerberusProvider>,
    )
    expect(screen.getByText('From El')).toBeInTheDocument()
  })

  test('should keep the v1 FileUploader and ImgPreview aliases', () => {
    expect(FileUploader).toBe(FileUpload.El)
    expect(ImgPreview).toBe(FileUpload.ItemGroupWithPreview)

    const props: FileUploaderProps = {
      accept: '.csv',
      heading: 'Alias heading',
      name: 'alias',
    }
    render(
      <CerberusProvider config={config}>
        <FileUploader {...props} />
      </CerberusProvider>,
    )
    expect(screen.getByText('Alias heading')).toBeInTheDocument()
    expect(screen.getByText(/import .csv files/i)).toBeInTheDocument()
  })

  test('should list an accepted file with its preview and delete it', async () => {
    const user = userEvent.setup()
    const file = new File(['(⌐□_□)'], 'hades.png', { type: 'image/png' })
    const { container } = render(
      <Test accept="image/*" name="upload" maxFiles={2} />,
    )

    await user.upload(getHiddenInput(container), file)

    const item = await waitFor(() => {
      const el = container.querySelector('[data-part="item"]')
      expect(el).not.toBeNull()
      return el!
    })
    expect(item).toHaveClass('cerberus-file-uploader__item')
    expect(screen.getByText('hades.png')).toHaveClass(
      'cerberus-file-uploader__itemName',
    )
    expect(
      item.querySelector('[data-part="item-size-text"]'),
    ).toBeInTheDocument()
    expect(await screen.findByAltText('preview of hades.png')).toHaveClass(
      'cerberus-file-uploader__itemPreviewImage',
    )

    const deleteTrigger = screen.getByRole('button', {
      name: 'delete file hades.png',
    })
    expect(deleteTrigger).toHaveClass(
      'cerberus-file-uploader__itemDeleteTrigger',
    )
    await user.click(deleteTrigger)
    await waitFor(() => expect(screen.queryByText('hades.png')).toBeNull())
  })

  test('should render a non-image file without an image preview', async () => {
    const user = userEvent.setup()
    const file = new File(['a,b'], 'data.csv', { type: 'text/csv' })
    const { container } = render(<Test accept=".csv" name="csv" />)

    await user.upload(getHiddenInput(container), file)

    expect(await screen.findByText('data.csv')).toBeInTheDocument()
    expect(container.querySelector('[data-part="item-preview"]')).toBeNull()
  })

  test('should patch every item with ItemGroupWithPreview part children', async () => {
    const user = userEvent.setup()
    const file = new File(['x'], 'zeus.png', { type: 'image/png' })
    const { container } = render(
      <CerberusProvider config={config}>
        <FileUpload.Root accept="image/*">
          <FileUpload.Trigger>Choose</FileUpload.Trigger>
          <ImgPreview data-testid="group">
            <FileUpload.ItemSizeText data-testid="size" />
            <FileUpload.ItemName data-testid="name" />
            <FileUpload.ItemDeleteTrigger>Remove</FileUpload.ItemDeleteTrigger>
            <p>after the items</p>
          </ImgPreview>
          <FileUpload.HiddenInput />
        </FileUpload.Root>
      </CerberusProvider>,
    )

    expect(screen.getByTestId('group')).toHaveClass(
      'cerberus-file-uploader__itemGroup',
    )
    expect(screen.getByText('after the items')).toBeInTheDocument()

    await user.upload(getHiddenInput(container), file)

    expect(await screen.findByTestId('name')).toHaveTextContent('zeus.png')
    expect(screen.getByTestId('size')).toHaveClass(
      'cerberus-file-uploader__itemSizeText',
    )
    const remove = screen.getByRole('button', { name: 'delete file zeus.png' })
    expect(remove).toHaveTextContent('Remove')
    await user.click(remove)
    await waitFor(() => expect(screen.queryByTestId('name')).toBeNull())
  })

  test('should render Root asChild with its context', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <FileUpload.Root asChild name="as-child">
          <section data-testid="root">
            <FileUpload.Dropzone>Drop</FileUpload.Dropzone>
            <FileUpload.HiddenInput />
          </section>
        </FileUpload.Root>
      </CerberusProvider>,
    )

    const root = screen.getByTestId('root')
    expect(root.tagName).toBe('SECTION')
    expect(root).toHaveAttribute('data-scope', 'file-upload')
    expect(root).toHaveClass('cerberus-file-uploader__root')
    // The dropzone reads the machine and the recipe from the root's context
    const dropzone = screen.getByRole('button', { name: 'dropzone' })
    expect(dropzone).toHaveClass('cerberus-file-uploader__dropzone')
    expect(getHiddenInput(container)).toHaveAttribute('name', 'as-child')
  })

  test('should render Item asChild with its context', async () => {
    const file = new File(['x'], 'hermes.txt', { type: 'text/plain' })

    function ItemTest() {
      const fileUpload = useFileUpload({ maxFiles: 2 })
      return (
        <>
          <button type="button" onClick={() => fileUpload.setFiles([file])}>
            add
          </button>
          <FileUpload.RootProvider value={fileUpload}>
            <FileUpload.ItemGroup>
              <FileUpload.Context>
                {(ctx) =>
                  ctx.acceptedFiles.map((f) => (
                    <FileUpload.Item key={f.name} file={f} asChild>
                      <li data-testid="item">
                        <FileUpload.ItemName />
                        <FileUpload.ItemSizeText />
                      </li>
                    </FileUpload.Item>
                  ))
                }
              </FileUpload.Context>
            </FileUpload.ItemGroup>
          </FileUpload.RootProvider>
        </>
      )
    }

    render(
      <CerberusProvider config={config}>
        <ItemTest />
      </CerberusProvider>,
    )

    await userEvent.click(screen.getByText('add'))
    const item = await screen.findByTestId('item')
    expect(item.tagName).toBe('LI')
    expect(item).toHaveClass('cerberus-file-uploader__item')
    // ItemName reads the file from the item's context
    expect(screen.getByText('hermes.txt')).toHaveClass(
      'cerberus-file-uploader__itemName',
    )
  })

  test('should drive FileUpload.RootProvider with useFileUpload', async () => {
    const file = new File(['x'], 'athena.png', { type: 'image/png' })
    let api: ReturnType<typeof useFileUpload> | undefined

    function RootProviderTest() {
      const fileUpload = useFileUpload({ accept: 'image/*', maxFiles: 3 })
      // oxlint-disable-next-line react/globals
      api = fileUpload
      return (
        <FileUpload.RootProvider value={fileUpload} data-testid="root">
          <FileUpload.Dropzone>Drop</FileUpload.Dropzone>
          <FileUpload.ItemGroupWithPreview />
          <FileUpload.Context>
            {(ctx) => <p>{ctx.acceptedFiles.length} accepted</p>}
          </FileUpload.Context>
          <FileUpload.HiddenInput />
        </FileUpload.RootProvider>
      )
    }

    render(
      <CerberusProvider config={config}>
        <RootProviderTest />
      </CerberusProvider>,
    )

    expect(screen.getByTestId('root')).toHaveClass(
      'cerberus-file-uploader__root',
    )
    expect(screen.getByText('0 accepted')).toBeInTheDocument()

    act(() => api!.setFiles([file]))

    expect(await screen.findByText('athena.png')).toHaveClass(
      'cerberus-file-uploader__itemName',
    )
    expect(screen.getByText('1 accepted')).toBeInTheDocument()
  })

  test('should create error messages with defaults', () => {
    const messages = createErrorMessages({ tooLarge: 'Too big' })
    expect(messages.FILE_TOO_LARGE).toBe('Too big')
    expect(messages.TOO_MANY_FILES).toBe('📊 Too many files selected')
  })
})
