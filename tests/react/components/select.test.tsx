import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Field,
  For,
  Select,
  Option,
  OptionGroup,
  OptionGroupLabel,
  CerberusProvider,
  createListCollection,
  createSelectCollection,
  useSelect,
  type SelectProps,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('Select', () => {
  const config = makeConfig()
  const collection = createSelectCollection([
    { label: 'Hades', value: 'hades' },
    { label: 'Persephone', value: 'persephone' },
    { label: 'Zeus', value: 'zeus', disabled: true },
  ])

  test('should render a select', () => {
    render(
      <CerberusProvider config={config}>
        <Field label="Select Relative">
          <Select collection={collection}>
            {collection.items.map((item) => (
              <Select.ItemWithIndicator key={item.value} item={item} />
            ))}
          </Select>
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText(/select relative/i)).toBeInTheDocument()
  })

  test('should render the default parts', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Select collection={collection} placeholder="Choose option" />
      </CerberusProvider>,
    )
    const part = (name: string) =>
      container.querySelector(`[data-scope="select"][data-part="${name}"]`)
    expect(part('root')).toBeInTheDocument()
    expect(part('control')).toBeInTheDocument()
    expect(part('trigger')).toBeInTheDocument()
    expect(part('indicator')).toBeInTheDocument()
    expect(part('positioner')).toBeInTheDocument()
    expect(part('content')).toBeInTheDocument()
    expect(container.querySelector('select')).toBeInTheDocument()
    expect(screen.getByText('Choose option')).toHaveAttribute(
      'data-part',
      'value-text',
    )
    // Label and clear trigger render only when given as part children
    expect(part('label')).toBeNull()
    expect(part('clear-trigger')).toBeNull()
    expect(container.querySelector('[data-part="invalid-icon"]')).toBeNull()
  })

  test('should render the invalid icon when invalid', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Select collection={collection} invalid />
      </CerberusProvider>,
    )
    expect(
      container.querySelector('[data-part="invalid-icon"]'),
    ).toBeInTheDocument()
  })

  test('should select an item and show its label', async () => {
    let value: string[] = []
    const { container } = render(
      <CerberusProvider config={config}>
        <Select
          collection={collection}
          name="relative"
          placeholder="Choose option"
          onValueChange={(details) => {
            value = details.value
          }}
        >
          <For each={collection.items}>
            {(item) => (
              <Select.ItemWithIndicator key={item.value} item={item} />
            )}
          </For>
        </Select>
      </CerberusProvider>,
    )
    await userEvent.click(screen.getByRole('combobox'))
    await userEvent.click(screen.getByRole('option', { name: 'Persephone' }))
    expect(value).toEqual(['persephone'])
    expect(
      container.querySelector('[data-part="value-text"]'),
    ).toHaveTextContent('Persephone')
    expect(container.querySelector('select')).toHaveValue('persephone')
  })

  test('should render the item label, text and indicator by default', () => {
    render(
      <CerberusProvider config={config}>
        <Select collection={collection} defaultValue={['hades']}>
          <Select.ItemWithIndicator item={collection.items[0]} />
        </Select>
      </CerberusProvider>,
    )
    const text = screen.getByText('Hades', {
      selector: '[data-part="item-text"]',
    })
    const item = text.parentElement
    expect(item).toHaveAttribute('data-part', 'item')
    // Text first, then the indicator (v1 `Option` order)
    expect(item?.lastElementChild).toHaveAttribute(
      'data-part',
      'item-indicator',
    )
    expect(item?.lastElementChild?.querySelector('svg')).toBeInTheDocument()
  })

  test('should render non-part item children as the item text', () => {
    render(
      <CerberusProvider config={config}>
        <Select collection={collection}>
          <Select.ItemWithIndicator item={collection.items[0]}>
            Lord of the dead
          </Select.ItemWithIndicator>
          <Select.ItemWithIndicator item={collection.items[1]}>
            <Select.ItemText data-testid="text">Queen</Select.ItemText>
            <Select.ItemIndicator data-testid="indicator">
              ✓
            </Select.ItemIndicator>
          </Select.ItemWithIndicator>
        </Select>
      </CerberusProvider>,
    )
    expect(screen.getByText('Lord of the dead')).toHaveAttribute(
      'data-part',
      'item-text',
    )
    // The hidden native select still lists the label as an <option>
    expect(
      screen.queryByText('Hades', { selector: '[data-part="item-text"]' }),
    ).toBeNull()
    expect(screen.getAllByTestId('text')).toHaveLength(1)
    expect(screen.getByTestId('text')).toHaveTextContent('Queen')
    expect(screen.getByTestId('indicator')).toHaveTextContent('✓')
  })

  test('should render an item group with a label', async () => {
    render(
      <CerberusProvider config={config}>
        <Field label="Select Relative">
          <Select collection={collection}>
            <Select.ItemGroupWithLabel label="Group 1">
              {collection.items.map((item) => (
                <Select.ItemWithIndicator key={item.value} item={item} />
              ))}
            </Select.ItemGroupWithLabel>
          </Select>
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByText(/select relative/i)).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('combobox'))
    const label = screen.getByText(/group 1/i)
    expect(label).toHaveAttribute('data-part', 'item-group-label')
    expect(label.parentElement).toHaveAttribute('aria-labelledby', label.id)
  })

  test('should not render an item group label without one', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Select collection={collection}>
          <Select.ItemGroupWithLabel data-testid="group">
            <Select.ItemWithIndicator item={collection.items[0]} />
          </Select.ItemGroupWithLabel>
        </Select>
      </CerberusProvider>,
    )
    expect(screen.getByTestId('group')).toHaveAttribute(
      'data-part',
      'item-group',
    )
    expect(container.querySelector('[data-part="item-group-label"]')).toBeNull()
  })

  test('should keep the v1 Option, OptionGroup and OptionGroupLabel aliases', async () => {
    expect(Option).toBe(Select.ItemWithIndicator)
    expect(OptionGroup).toBe(Select.ItemGroupWithLabel)
    expect(OptionGroupLabel).toBe(Select.ItemGroupLabel)

    render(
      <CerberusProvider config={config}>
        <Field label="Select Relative">
          <Select collection={collection}>
            <OptionGroup>
              {collection.items.map((item) => (
                <Option key={item.value} item={item} />
              ))}
              <OptionGroupLabel>Group 1</OptionGroupLabel>
            </OptionGroup>
          </Select>
        </Field>
      </CerberusProvider>,
    )
    await userEvent.click(screen.getByRole('combobox'))
    // The label part is lifted before the items, once
    const label = screen.getByText(/group 1/i)
    expect(label).toHaveAttribute('data-part', 'item-group-label')
    expect(label.parentElement?.firstElementChild).toBe(label)
    expect(screen.getAllByText(/group 1/i)).toHaveLength(1)
    expect(screen.getByRole('option', { name: 'Hades' })).toBeInTheDocument()
  })

  test('should apply direct part children as overrides', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Select collection={collection} placeholder="Choose option">
          <Select.Label>Relative</Select.Label>
          <Select.Trigger data-testid="trigger" />
          <Select.ValueText placeholder="Pick one" />
          <Select.Indicator data-testid="indicator">▾</Select.Indicator>
          <Select.ClearTrigger>Clear</Select.ClearTrigger>
          <Select.Content data-testid="content" />
          <Select.HiddenSelect name="relative" />
          <Select.ItemWithIndicator item={collection.items[0]} />
        </Select>
      </CerberusProvider>,
    )
    expect(screen.getByText('Relative')).toHaveAttribute('data-part', 'label')
    expect(screen.getAllByTestId('trigger')).toHaveLength(1)
    expect(screen.getByTestId('trigger')).toHaveAttribute('role', 'combobox')
    expect(screen.getByText('Pick one')).toHaveAttribute(
      'data-part',
      'value-text',
    )
    expect(screen.queryByText('Choose option')).toBeNull()
    expect(screen.getByTestId('indicator')).toHaveTextContent('▾')
    expect(screen.getByTestId('trigger')).toContainElement(
      screen.getByTestId('indicator'),
    )
    expect(screen.getByText('Clear')).toHaveAttribute(
      'data-part',
      'clear-trigger',
    )
    expect(screen.getAllByTestId('content')).toHaveLength(1)
    expect(screen.getByTestId('content')).toContainElement(
      screen.getByText('Hades', { selector: '[data-part="item-text"]' }),
    )
    expect(container.querySelectorAll('select')).toHaveLength(1)
    expect(container.querySelector('select')).toHaveAttribute(
      'name',
      'relative',
    )
  })

  test('should replace the trigger content with a trigger child with children', () => {
    render(
      <CerberusProvider config={config}>
        <Select collection={collection} placeholder="Choose option">
          <Select.Trigger>
            <Select.ValueText placeholder="Custom" />
          </Select.Trigger>
        </Select>
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).toHaveTextContent('Custom')
    expect(screen.queryByText('Choose option')).toBeNull()
    expect(
      screen.getByRole('combobox').querySelector('[data-part="indicator"]'),
    ).toBeNull()
  })

  test('should cascade the size variant from the root', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Select collection={collection} size="lg" />
      </CerberusProvider>,
    )
    expect(
      container.querySelector('[data-part="content"]')?.className,
    ).toContain('select__content--size_lg')
    expect(container.querySelector('[data-part="root"]')?.className).toContain(
      'select__root--size_lg',
    )
  })

  test('should keep the collection item type generic', async () => {
    interface Character {
      id: number
      name: string
    }
    const characters = createListCollection<Character>({
      items: [
        { id: 1, name: 'Hades' },
        { id: 2, name: 'Zeus' },
      ],
      itemToString: (item) => item.name,
      itemToValue: (item) => String(item.id),
    })
    let selected: string | undefined

    // `SelectProps<T>` stays generic for typed wrappers
    const size: SelectProps<Character>['size'] = 'lg'

    render(
      <CerberusProvider config={config}>
        <Select
          collection={characters}
          size={size}
          onValueChange={(details) => {
            // `details.items` is inferred as `Character[]`
            selected = details.items[0]?.name
            // @ts-expect-error `Character` has no `label`
            void details.items[0]?.label
          }}
        >
          <For each={characters.items}>
            {(item) => <Select.ItemWithIndicator key={item.id} item={item} />}
          </For>
        </Select>
      </CerberusProvider>,
    )
    await userEvent.click(screen.getByRole('combobox'))
    // The default item text comes from the collection's `itemToString`
    await userEvent.click(screen.getByRole('option', { name: 'Zeus' }))
    expect(selected).toBe('Zeus')
  })

  test('should compose the primitives with an asChild trigger and context', async () => {
    render(
      <CerberusProvider config={config}>
        <Select.Root collection={collection}>
          <Select.Label>Select Relative</Select.Label>
          <Select.Control>
            <Select.Trigger asChild>
              <button type="button">
                <Select.ValueText placeholder="Open" />
              </button>
            </Select.Trigger>
          </Select.Control>
          <Select.Context>
            {(select) => (
              <p data-testid="state">{select.open ? 'open' : 'closed'}</p>
            )}
          </Select.Context>
          <Select.Positioner>
            <Select.Content>
              <Select.List>
                <For each={collection.items}>
                  {(item) => (
                    <Select.Item key={item.value} item={item}>
                      <Select.ItemText>{item.label}</Select.ItemText>
                    </Select.Item>
                  )}
                </For>
              </Select.List>
            </Select.Content>
          </Select.Positioner>
        </Select.Root>
      </CerberusProvider>,
    )
    const trigger = screen.getByRole('combobox')
    expect(trigger.tagName).toBe('BUTTON')
    expect(trigger).toHaveAttribute('data-scope', 'select')
    expect(trigger).toHaveAttribute('data-part', 'trigger')
    expect(screen.getByTestId('state')).toHaveTextContent('closed')
    await userEvent.click(trigger)
    expect(screen.getByTestId('state')).toHaveTextContent('open')
  })

  test('should render the root asChild', () => {
    render(
      <CerberusProvider config={config}>
        <Select.Root collection={collection} asChild>
          <section data-testid="root">
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Choose" />
              </Select.Trigger>
            </Select.Control>
          </section>
        </Select.Root>
      </CerberusProvider>,
    )
    const root = screen.getByTestId('root')
    expect(root.tagName).toBe('SECTION')
    expect(root).toHaveAttribute('data-part', 'root')
    expect(root.className).toContain('select__root')
    // Parts inside still read the root's context
    expect(screen.getByRole('combobox')).toHaveAttribute('data-part', 'trigger')
  })

  test('should render ItemGroup and Item asChild with their context', () => {
    render(
      <CerberusProvider config={config}>
        <Select.Root collection={collection} open>
          <Select.Control>
            <Select.Trigger />
          </Select.Control>
          <Select.Positioner>
            <Select.Content>
              <Select.ItemGroup asChild>
                <section data-testid="group">
                  <Select.ItemGroupLabel>Gods</Select.ItemGroupLabel>
                  <Select.Item item={collection.items[2]} asChild>
                    <a href="#zeus" data-testid="item">
                      <Select.ItemText>Zeus</Select.ItemText>
                      <Select.ItemContext>
                        {(item) => (
                          <span data-testid="item-state">
                            {item.disabled ? 'disabled' : 'enabled'}
                          </span>
                        )}
                      </Select.ItemContext>
                    </a>
                  </Select.Item>
                </section>
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Select.Root>
      </CerberusProvider>,
    )
    const group = screen.getByTestId('group')
    expect(group.tagName).toBe('SECTION')
    expect(group).toHaveAttribute('data-part', 'item-group')
    // The group label is linked through the item group context
    expect(group).toHaveAttribute(
      'aria-labelledby',
      screen.getByText('Gods').id,
    )
    const item = screen.getByTestId('item')
    expect(item.tagName).toBe('A')
    expect(item).toHaveAttribute('data-part', 'item')
    expect(item).toHaveAttribute('role', 'option')
    expect(screen.getByText('Zeus')).toHaveAttribute('data-part', 'item-text')
    expect(screen.getByTestId('item-state')).toHaveTextContent('disabled')
  })

  test('should drive Select.RootProvider with useSelect', async () => {
    function Test() {
      const select = useSelect({ collection, defaultValue: ['hades'] })
      return (
        <>
          <p data-testid="value">{select.value.join(',')}</p>
          <Select.RootProvider value={select} size="sm">
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText />
              </Select.Trigger>
            </Select.Control>
            <Select.Positioner>
              <Select.Content>
                <For each={collection.items}>
                  {(item) => (
                    <Select.ItemWithIndicator key={item.value} item={item} />
                  )}
                </For>
              </Select.Content>
            </Select.Positioner>
          </Select.RootProvider>
        </>
      )
    }

    const { container } = render(
      <CerberusProvider config={config}>
        <Test />
      </CerberusProvider>,
    )
    const trigger = screen.getByRole('combobox')
    expect(trigger).toHaveAttribute('data-part', 'trigger')
    expect(trigger).toHaveTextContent('Hades')
    expect(container.querySelector('[data-part="root"]')?.className).toContain(
      'select__root--size_sm',
    )
    await userEvent.click(trigger)
    await userEvent.click(screen.getByRole('option', { name: 'Persephone' }))
    expect(screen.getByTestId('value')).toHaveTextContent('persephone')
  })
})
