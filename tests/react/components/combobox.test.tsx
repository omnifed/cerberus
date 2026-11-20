import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Combobox,
  CerberusProvider,
  For,
  createListCollection,
  useCombobox,
  useStatefulCollection,
  createSelectCollection,
  type ComboboxProps,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('Combobox', () => {
  const config = makeConfig()
  const collection = createSelectCollection([
    { label: 'Hades', value: 'hades' },
    { label: 'Persephone', value: 'persephone' },
    { label: 'Zeus', value: 'zeus', disabled: true },
  ])

  test('should render a select', () => {
    render(
      <CerberusProvider config={config}>
        <Combobox collection={collection} label="Select Relative">
          <For each={collection.items}>
            {(item) => (
              <Combobox.ItemWithIndicator key={item.value} item={item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <span>{item.value}</span>
              </Combobox.ItemWithIndicator>
            )}
          </For>
        </Combobox>
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText(/select relative/i)).toBeInTheDocument()
  })

  test('should not render a label without one', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Combobox collection={collection} />
      </CerberusProvider>,
    )
    expect(
      container.querySelector('[data-scope="combobox"][data-part="label"]'),
    ).toBeNull()
  })

  test('should render an item group with a label', async () => {
    render(
      <CerberusProvider config={config}>
        <Combobox collection={collection} label="Select Relative">
          <Combobox.ItemGroupWithLabel label="Group 1">
            <For each={collection.items}>
              {(item) => (
                <Combobox.ItemWithIndicator key={item.value} item={item}>
                  <Combobox.ItemText>{item.label}</Combobox.ItemText>
                  <span>{item.value}</span>
                </Combobox.ItemWithIndicator>
              )}
            </For>
          </Combobox.ItemGroupWithLabel>
        </Combobox>
      </CerberusProvider>,
    )
    expect(screen.getByText(/select relative/i)).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('combobox'))
    expect(screen.getByText(/group 1/i)).toHaveAttribute(
      'data-part',
      'item-group-label',
    )
  })

  test('should render a start icon', () => {
    render(
      <CerberusProvider config={config}>
        <Combobox
          collection={collection}
          label="Select Relative"
          startIcon={<span>🔥</span>}
        />
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'data-has',
      'start-indicator',
    )
    const icon = screen.getByText('🔥').parentElement
    expect(icon?.tagName).toBe('SPAN')
    expect(icon).toHaveAttribute('data-scope', 'combobox')
    expect(icon).toHaveAttribute('data-part', 'start-icon')
  })

  test('should not mark the input without a start icon', () => {
    render(
      <CerberusProvider config={config}>
        <Combobox collection={collection} label="Select Relative" />
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).not.toHaveAttribute('data-has')
  })

  test('should apply direct part children as overrides', () => {
    render(
      <CerberusProvider config={config}>
        <Combobox collection={collection} label="Select Relative">
          <Combobox.Input data-testid="input" placeholder="Search" />
          <Combobox.StartIcon>★</Combobox.StartIcon>
          <Combobox.Content data-testid="content" />
          <Combobox.ItemWithIndicator item={collection.items[0]}>
            <Combobox.ItemIndicator data-testid="indicator">
              ✓
            </Combobox.ItemIndicator>
            <Combobox.ItemText>Hades</Combobox.ItemText>
          </Combobox.ItemWithIndicator>
        </Combobox>
      </CerberusProvider>,
    )
    const input = screen.getByTestId('input')
    expect(input).toHaveAttribute('placeholder', 'Search')
    expect(input).toHaveAttribute('data-has', 'start-indicator')
    expect(screen.getByText('★')).toHaveAttribute('data-part', 'start-icon')
    expect(screen.getAllByTestId('content')).toHaveLength(1)
    expect(screen.getByTestId('indicator')).toHaveTextContent('✓')
    expect(screen.getByTestId('content')).toContainElement(
      screen.getByText('Hades'),
    )
  })

  test('should return a stateful object for the root component and filter', async () => {
    function Test() {
      const { collection, handleInputChange } = useStatefulCollection([
        { label: 'Hades', value: 'hades' },
        { label: 'Persephone', value: 'persephone' },
        { label: 'Zeus', value: 'zeus', disabled: true },
        { label: 'Heracles', value: 'half god' },
      ])
      return (
        <Combobox
          collection={collection}
          label="Select Relative"
          onInputValueChange={handleInputChange}
        >
          <For each={collection.items}>
            {(item) => (
              <Combobox.ItemWithIndicator key={item.value} item={item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
              </Combobox.ItemWithIndicator>
            )}
          </For>
        </Combobox>
      )
    }

    render(
      <CerberusProvider config={config}>
        <Test />
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    await userEvent.type(screen.getByRole('combobox'), 'her')
    expect(screen.getByText(/Heracles/i)).toBeInTheDocument()
    expect(screen.queryByText(/Persephone/i)).toBeNull()
    expect(screen.queryByText(/Hades/i)).toBeNull()
  })

  test('should report filter characters from useStatefulCollection', async () => {
    function Test() {
      const { collection, filterChars, handleInputChange } =
        useStatefulCollection([
          { label: 'Hades', value: 'hades' },
          { label: 'Zeus', value: 'zeus' },
        ])
      return (
        <>
          <p data-testid="chars">{filterChars.join(',')}</p>
          <p data-testid="count">{collection.size}</p>
          <Combobox
            collection={collection}
            onInputValueChange={handleInputChange}
          />
        </>
      )
    }

    render(
      <CerberusProvider config={config}>
        <Test />
      </CerberusProvider>,
    )
    expect(screen.getByTestId('count')).toHaveTextContent('2')
    await userEvent.type(screen.getByRole('combobox'), 'ze')
    expect(screen.getByTestId('chars')).toHaveTextContent('z,e')
    expect(screen.getByTestId('count')).toHaveTextContent('1')
  })

  test('should filter the initial items when the query is edited', async () => {
    const initialItems = [
      { label: 'Hades', value: 'hades' },
      { label: 'Zeus', value: 'zeus' },
      { label: 'Hera', value: 'hera' },
    ]
    function Test() {
      const { collection, filterChars, handleInputChange } =
        useStatefulCollection(initialItems)
      return (
        <>
          <p data-testid="chars">{filterChars.join(',')}</p>
          <p data-testid="count">{collection.size}</p>
          <Combobox
            collection={collection}
            onInputValueChange={handleInputChange}
          />
        </>
      )
    }

    render(
      <CerberusProvider config={config}>
        <Test />
      </CerberusProvider>,
    )
    const input = screen.getByRole('combobox')
    await userEvent.type(input, 'ze')
    expect(screen.getByTestId('count')).toHaveTextContent('1')
    // Replace the query: items the previous query excluded come back
    await userEvent.clear(input)
    expect(screen.getByTestId('count')).toHaveTextContent('3')
    expect(screen.getByTestId('chars')).toBeEmptyDOMElement()
    await userEvent.type(input, 'he')
    expect(screen.getByTestId('count')).toHaveTextContent('1')
    await userEvent.type(input, '{Backspace}{Backspace}h')
    expect(screen.getByTestId('count')).toHaveTextContent('2')
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

    // `ComboboxProps<T>` stays generic for typed wrappers
    const size: ComboboxProps<Character>['size'] = 'lg'

    render(
      <CerberusProvider config={config}>
        <Combobox
          collection={characters}
          label="Characters"
          size={size}
          onValueChange={(details) => {
            // `details.items` is inferred as `Character[]`
            selected = details.items[0]?.name
            // @ts-expect-error `Character` has no `label`
            void details.items[0]?.label
          }}
        >
          <For each={characters.items}>
            {(item) => (
              <Combobox.ItemWithIndicator key={item.id} item={item}>
                <Combobox.ItemText>{item.name}</Combobox.ItemText>
              </Combobox.ItemWithIndicator>
            )}
          </For>
        </Combobox>
      </CerberusProvider>,
    )
    await userEvent.click(screen.getByRole('combobox'))
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}')
    expect(selected).toBe('Zeus')
  })

  test('should compose the primitives with an asChild trigger and context', async () => {
    render(
      <CerberusProvider config={config}>
        <Combobox.Root collection={collection}>
          <Combobox.Label>Select Relative</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.Trigger asChild>
              <button type="button">Open</button>
            </Combobox.Trigger>
          </Combobox.Control>
          <Combobox.Context>
            {(combobox) => (
              <p data-testid="state">{combobox.open ? 'open' : 'closed'}</p>
            )}
          </Combobox.Context>
          <Combobox.Positioner>
            <Combobox.Content>
              <For each={collection.items}>
                {(item) => (
                  <Combobox.Item key={item.value} item={item}>
                    <Combobox.ItemText>{item.label}</Combobox.ItemText>
                  </Combobox.Item>
                )}
              </For>
            </Combobox.Content>
          </Combobox.Positioner>
        </Combobox.Root>
      </CerberusProvider>,
    )
    const trigger = screen.getByText('Open')
    expect(trigger.tagName).toBe('BUTTON')
    expect(trigger).toHaveAttribute('data-scope', 'combobox')
    expect(trigger).toHaveAttribute('data-part', 'trigger')
    expect(screen.getByTestId('state')).toHaveTextContent('closed')
    await userEvent.click(trigger)
    expect(screen.getByTestId('state')).toHaveTextContent('open')
  })

  test('should render the root asChild', () => {
    render(
      <CerberusProvider config={config}>
        <Combobox.Root collection={collection} asChild>
          <section data-testid="root">
            <Combobox.Control>
              <Combobox.Input />
            </Combobox.Control>
          </section>
        </Combobox.Root>
      </CerberusProvider>,
    )
    const root = screen.getByTestId('root')
    expect(root.tagName).toBe('SECTION')
    expect(root).toHaveAttribute('data-part', 'root')
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  test('should render ItemGroup and Item asChild with their context', () => {
    render(
      <CerberusProvider config={config}>
        <Combobox.Root collection={collection} open>
          <Combobox.Control>
            <Combobox.Input />
          </Combobox.Control>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.ItemGroup asChild>
                <section data-testid="group">
                  <Combobox.ItemGroupLabel>Gods</Combobox.ItemGroupLabel>
                  <Combobox.Item item={collection.items[0]} asChild>
                    <a href="#hades" data-testid="item">
                      <Combobox.ItemText>Hades</Combobox.ItemText>
                      <Combobox.ItemContext>
                        {(item) => (
                          <span data-testid="item-state">
                            {item.disabled ? 'disabled' : 'enabled'}
                          </span>
                        )}
                      </Combobox.ItemContext>
                    </a>
                  </Combobox.Item>
                </section>
              </Combobox.ItemGroup>
            </Combobox.Content>
          </Combobox.Positioner>
        </Combobox.Root>
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
    expect(screen.getByText('Hades')).toHaveAttribute('data-part', 'item-text')
    expect(screen.getByTestId('item-state')).toHaveTextContent('enabled')
  })

  test('should drive Combobox.RootProvider with useCombobox', () => {
    function Test() {
      const combobox = useCombobox({ collection: collection })
      return (
        <Combobox.RootProvider value={combobox}>
          <Combobox.Control>
            <Combobox.Input />
          </Combobox.Control>
        </Combobox.RootProvider>
      )
    }

    render(
      <CerberusProvider config={config}>
        <Test />
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).toHaveAttribute('data-part', 'input')
  })
})
