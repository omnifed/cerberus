import { describe, test, expect } from 'bun:test'
import { render, screen, waitFor, within } from '@testing-library/react'
import {
  CerberusProvider,
  DatePicker,
  Field,
  getLocalTimeZone,
  parseDate,
  today,
  useDatePicker,
  type DateValue,
  type DatePickerValueChangeDetails,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('DatePicker', () => {
  const config = makeConfig()

  test('renders a date picker', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <DatePicker id="start_date" name="start_date">
            <DatePicker.Label>Start date</DatePicker.Label>
            <DatePicker.InputGroup />
            <DatePicker.Calendar />
          </DatePicker>
        </Field>
      </CerberusProvider>,
    )

    expect(screen.getByText('Start date')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('renders a range picker', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <DatePicker id="range_dates" name="range_dates" selectionMode="range">
            <DatePicker.Label>Search range</DatePicker.Label>
            <DatePicker.RangeInputGroup />
            <DatePicker.Calendar />
          </DatePicker>
        </Field>
      </CerberusProvider>,
    )

    expect(screen.getByText('Search range')).toBeInTheDocument()
    expect(screen.getAllByRole('textbox')).toHaveLength(2)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('shows a calendar when the trigger button is clicked', async () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <DatePicker id="start_date" name="start_date">
            <DatePicker.Label>Start date</DatePicker.Label>
            <DatePicker.InputGroup />
            <DatePicker.Calendar />
          </DatePicker>
        </Field>
      </CerberusProvider>,
    )

    await userEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByRole('application')).toBeInTheDocument()
      expect(screen.getByRole('application')).toHaveAttribute(
        'data-state',
        'open',
      )
    })
  })

  test('selects a day from the calendar', async () => {
    let selected: DateValue[] = []
    render(
      <CerberusProvider config={config}>
        <DatePicker
          defaultFocusedValue={parseDate('2025-03-10')}
          onValueChange={(details: DatePickerValueChangeDetails) => {
            selected = details.value
          }}
        >
          <DatePicker.InputGroup />
          <DatePicker.Calendar />
        </DatePicker>
      </CerberusProvider>,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Open calendar' }))
    const day = await screen.findByRole('button', { name: /March 14, 2025/ })
    await userEvent.click(day)
    await waitFor(() => {
      expect(selected.map(String)).toEqual(['2025-03-14'])
      expect(screen.getByRole('textbox')).toHaveValue('03/14/2025')
    })
  })

  describe('El', () => {
    test('renders the styled root with direct part children in place', () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker data-testid="root">
            <DatePicker.Label data-testid="label">Start date</DatePicker.Label>
            <DatePicker.Control data-testid="control">
              <DatePicker.Input />
              <DatePicker.Trigger>Open</DatePicker.Trigger>
            </DatePicker.Control>
          </DatePicker>
        </CerberusProvider>,
      )

      const root = screen.getByTestId('root')
      expect(root).toHaveAttribute('data-scope', 'date-picker')
      expect(root).toHaveAttribute('data-part', 'root')
      expect(root.className).toContain('date-picker__root')
      // Every child renders as given inside the root: there are no default
      // parts to override, and no part is rendered twice
      expect(screen.getByTestId('label').parentElement).toBe(root)
      expect(screen.getByTestId('control').parentElement).toBe(root)
      expect(screen.getAllByRole('textbox')).toHaveLength(1)
      expect(screen.getByText('Open')).toHaveAttribute('data-part', 'trigger')
      expect(screen.getByText('Open').className).toContain(
        'date-picker__trigger',
      )
    })

    test('keeps v1 defaults while letting props override them', () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker
            positioning={{ placement: 'top-end' }}
            defaultValue={[parseDate('2025-01-05')]}
          >
            <DatePicker.InputGroup />
          </DatePicker>
        </CerberusProvider>,
      )
      expect(screen.getByRole('textbox')).toHaveValue('01/05/2025')
    })
  })

  test('renders the primitives under DatePicker.Root with Context', async () => {
    render(
      <CerberusProvider config={config}>
        <DatePicker.Root>
          <DatePicker.Control>
            <DatePicker.Input />
            <DatePicker.Trigger asChild>
              <button type="button">Toggle</button>
            </DatePicker.Trigger>
          </DatePicker.Control>
          <DatePicker.Context>
            {(datePicker) => (
              <p data-testid="state">{datePicker.open ? 'open' : 'closed'}</p>
            )}
          </DatePicker.Context>
        </DatePicker.Root>
      </CerberusProvider>,
    )

    const trigger = screen.getByText('Toggle')
    expect(trigger.tagName).toBe('BUTTON')
    expect(trigger).toHaveAttribute('data-part', 'trigger')
    expect(screen.getByTestId('state')).toHaveTextContent('closed')
    await userEvent.click(trigger)
    expect(screen.getByTestId('state')).toHaveTextContent('open')
  })

  test('drives DatePicker.RootProvider with useDatePicker', async () => {
    function Test() {
      const datePicker = useDatePicker({
        defaultValue: [parseDate('2025-06-15')],
      })
      return (
        <>
          <button type="button" onClick={() => datePicker.clearValue()}>
            Clear
          </button>
          <DatePicker.RootProvider value={datePicker} data-testid="root">
            <DatePicker.InputGroup />
            <DatePicker.Calendar />
          </DatePicker.RootProvider>
        </>
      )
    }

    render(
      <CerberusProvider config={config}>
        <Test />
      </CerberusProvider>,
    )

    const root = screen.getByTestId('root')
    expect(root).toHaveAttribute('data-part', 'root')
    expect(root.className).toContain('date-picker__root')
    expect(screen.getByRole('textbox')).toHaveValue('06/15/2025')
    await userEvent.click(screen.getByText('Clear'))
    await waitFor(() => expect(screen.getByRole('textbox')).toHaveValue(''))
  })

  describe('asChild', () => {
    test('Root provides its context through asChild', () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker.Root asChild>
            <section data-testid="root">
              <DatePicker.InputGroup />
            </section>
          </DatePicker.Root>
        </CerberusProvider>,
      )
      const root = screen.getByTestId('root')
      expect(root.tagName).toBe('SECTION')
      expect(root).toHaveAttribute('data-part', 'root')
      expect(root.className).toContain('date-picker__root')
      expect(screen.getByRole('textbox')).toHaveAttribute('data-part', 'input')
    })

    test('RootProvider provides its context through asChild', () => {
      function Test() {
        const datePicker = useDatePicker()
        return (
          <DatePicker.RootProvider value={datePicker} asChild>
            <section data-testid="root">
              <DatePicker.InputGroup />
            </section>
          </DatePicker.RootProvider>
        )
      }
      render(
        <CerberusProvider config={config}>
          <Test />
        </CerberusProvider>,
      )
      const root = screen.getByTestId('root')
      expect(root.tagName).toBe('SECTION')
      expect(root.className).toContain('date-picker__root')
      expect(screen.getByRole('textbox')).toHaveAttribute('data-part', 'input')
    })

    test('View, Table and TableCell provide their context through asChild', () => {
      const day = parseDate('2025-03-14')
      render(
        <CerberusProvider config={config}>
          <DatePicker.Root defaultFocusedValue={day}>
            <DatePicker.View view="day" asChild>
              <section data-testid="view">
                <DatePicker.Table asChild>
                  <table data-testid="table">
                    <tbody>
                      <DatePicker.TableRow data-testid="row">
                        <DatePicker.TableCell value={day} asChild>
                          <td data-testid="cell">
                            <DatePicker.TableCellTrigger>
                              14
                            </DatePicker.TableCellTrigger>
                          </td>
                        </DatePicker.TableCell>
                      </DatePicker.TableRow>
                    </tbody>
                  </table>
                </DatePicker.Table>
              </section>
            </DatePicker.View>
          </DatePicker.Root>
        </CerberusProvider>,
      )

      const view = screen.getByTestId('view')
      expect(view.tagName).toBe('SECTION')
      expect(view).toHaveAttribute('data-part', 'view')
      expect(view).not.toHaveAttribute('hidden')

      const table = screen.getByTestId('table')
      expect(table).toHaveAttribute('data-part', 'table')
      // The table reads the view from the View context
      expect(table).toHaveAttribute('data-view', 'day')
      expect(table.className).toContain('date-picker__table')
      // The row reads the Table context
      expect(screen.getByTestId('row')).toHaveAttribute(
        'data-part',
        'table-row',
      )

      const cell = screen.getByTestId('cell')
      expect(cell).toHaveAttribute('data-part', 'table-cell')
      expect(cell.className).toContain('date-picker__tableCell')
      // The trigger reads the TableCell context
      const trigger = screen.getByText('14')
      expect(trigger).toHaveAttribute('data-part', 'table-cell-trigger')
      expect(trigger).toHaveAttribute('data-value', '2025-03-14')
    })
  })

  describe('InputGroup', () => {
    test('renders the control, icon trigger and input', () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker>
            <DatePicker.InputGroup data-testid="input" />
          </DatePicker>
        </CerberusProvider>,
      )
      const input = screen.getByTestId('input')
      expect(input).toHaveAttribute('data-part', 'input')
      expect(input).toHaveAttribute('maxLength', '11')
      expect(input).toHaveAttribute('placeholder', 'MM/DD/YYYY')
      const control = input.parentElement!
      expect(control).toHaveAttribute('data-part', 'control')
      const trigger = within(control).getByRole('button', {
        name: 'Open calendar',
      })
      expect(trigger).toHaveAttribute('data-part', 'trigger')
    })

    test('applies direct part children as overrides', () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker>
            <DatePicker.InputGroup placeholder="Pick a date">
              <DatePicker.Control data-testid="control" />
              <DatePicker.IconTrigger ariaLabel="Choose date" />
              <DatePicker.ClearTrigger>Clear</DatePicker.ClearTrigger>
            </DatePicker.InputGroup>
          </DatePicker>
        </CerberusProvider>,
      )
      const control = screen.getByTestId('control')
      expect(screen.getByRole('textbox')).toHaveAttribute(
        'placeholder',
        'Pick a date',
      )
      expect(
        within(control).getByRole('button', { name: 'Choose date' }),
      ).toHaveAttribute('data-part', 'trigger')
      // Non-part children render inside the control after the input
      expect(within(control).getByText('Clear')).toHaveAttribute(
        'data-part',
        'clear-trigger',
      )
      expect(control.lastElementChild).toBe(screen.getByText('Clear'))
    })

    test('replaces the icon trigger with a Trigger child that has children', () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker>
            <DatePicker.InputGroup>
              <DatePicker.Trigger>Pick</DatePicker.Trigger>
            </DatePicker.InputGroup>
          </DatePicker>
        </CerberusProvider>,
      )
      expect(screen.getAllByRole('button')).toHaveLength(1)
      expect(screen.getByRole('button')).toHaveTextContent('Pick')
      expect(screen.getByRole('button')).toHaveAttribute('data-part', 'trigger')
    })
  })

  describe('RangeInputGroup', () => {
    test('renders the start and end inputs of a range', () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker
            selectionMode="range"
            defaultValue={[parseDate('2025-01-02'), parseDate('2025-01-09')]}
          >
            <DatePicker.RangeInputGroup>
              <DatePicker.Control data-testid="control" />
            </DatePicker.RangeInputGroup>
          </DatePicker>
        </CerberusProvider>,
      )
      const control = screen.getByTestId('control')
      expect(control).toHaveAttribute('data-range')
      const [start, end] = screen.getAllByRole('textbox')
      expect(start).toHaveAttribute('data-range-input')
      expect(start).not.toHaveAttribute('data-range-end-input')
      expect(start).toHaveAttribute('data-index', '0')
      expect(start).toHaveValue('01/02/2025')
      expect(end).toHaveAttribute('data-range-end-input')
      expect(end).toHaveAttribute('data-index', '1')
      expect(end).toHaveValue('01/09/2025')
      expect(end).toHaveAttribute('placeholder', 'MM/DD/YYYY')
      expect(end).toHaveAttribute('maxLength', '11')
    })
  })

  describe('IconTrigger', () => {
    test('renders a ghost IconButton trigger with the calendar icon', async () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker>
            <DatePicker.IconTrigger data-testid="trigger" />
            <DatePicker.Context>
              {(datePicker) => (
                <p data-testid="state">{datePicker.open ? 'open' : 'closed'}</p>
              )}
            </DatePicker.Context>
          </DatePicker>
        </CerberusProvider>,
      )
      const trigger = screen.getByTestId('trigger')
      expect(trigger.tagName).toBe('BUTTON')
      expect(trigger).toHaveAttribute('aria-label', 'Open calendar')
      expect(trigger).toHaveAttribute('data-part', 'trigger')
      expect(trigger.querySelector('svg')).not.toBeNull()
      await userEvent.click(trigger)
      expect(screen.getByTestId('state')).toHaveTextContent('open')
    })

    test('replaces the icon with its children', () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker>
            <DatePicker.IconTrigger ariaLabel="Calendar">
              <span>icon</span>
            </DatePicker.IconTrigger>
          </DatePicker>
        </CerberusProvider>,
      )
      expect(
        screen.getByRole('button', { name: 'Calendar' }),
      ).toHaveTextContent('icon')
    })
  })

  describe('Calendar', () => {
    test('renders the positioned content with the three views', () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker open defaultFocusedValue={parseDate('2025-03-10')}>
            <DatePicker.Calendar data-testid="content">
              <DatePicker.Positioner data-testid="positioner" />
              <DatePicker.MonthView data-testid="month-view" />
              <p>Footer</p>
            </DatePicker.Calendar>
          </DatePicker>
        </CerberusProvider>,
      )
      const content = screen.getByTestId('content')
      expect(content).toHaveAttribute('data-part', 'content')
      expect(content.parentElement).toBe(screen.getByTestId('positioner'))
      const views = content.querySelectorAll('[data-part="view"]')
      // Ark's View has no data-view; its table does
      expect(
        Array.from(views).map((v) =>
          v.querySelector('table')?.getAttribute('data-view'),
        ),
      ).toEqual(['day', 'month', 'year'])
      expect(views[1]).toBe(screen.getByTestId('month-view'))
      // Only the current view is shown
      expect(views[0]).not.toHaveAttribute('hidden')
      expect(views[1]).toHaveAttribute('hidden')
      expect(content.lastElementChild).toBe(screen.getByText('Footer'))
    })
  })

  describe('ContentGroup', () => {
    test('renders the content inside its positioner', () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker open>
            <DatePicker.ContentGroup data-testid="content">
              <DatePicker.Positioner data-testid="positioner">
                ignored
              </DatePicker.Positioner>
              <DatePicker.DayView />
            </DatePicker.ContentGroup>
          </DatePicker>
        </CerberusProvider>,
      )
      const content = screen.getByTestId('content')
      const positioner = screen.getByTestId('positioner')
      expect(positioner).toHaveAttribute('data-part', 'positioner')
      expect(content.parentElement).toBe(positioner)
      expect(content.className).toContain('date-picker__content')
      expect(screen.queryByText('ignored')).toBeNull()
      expect(content.querySelector('[data-view="day"]')).not.toBeNull()
    })
  })

  describe('views', () => {
    test('DayView renders week days and marks past, today and future days', () => {
      // DayView takes "today" in the local time zone
      const todayValue = today(getLocalTimeZone())
      render(
        <CerberusProvider config={config}>
          <DatePicker defaultFocusedValue={todayValue}>
            <DatePicker.DayView data-testid="view">
              <DatePicker.Table data-testid="table" />
              <p>After table</p>
            </DatePicker.DayView>
          </DatePicker>
        </CerberusProvider>,
      )
      const view = screen.getByTestId('view')
      expect(view).not.toHaveAttribute('hidden')
      const table = screen.getByTestId('table')
      expect(table).toHaveAttribute('data-view', 'day')
      expect(table.querySelectorAll('thead th')).toHaveLength(7)
      expect(table.querySelector('[data-date="today"]')).toHaveTextContent(
        String(todayValue.day),
      )
      expect(
        table.querySelectorAll('[data-date="past"]').length +
          table.querySelectorAll('[data-date="future"]').length,
      ).toBeGreaterThan(0)
      expect(view.lastElementChild).toBe(screen.getByText('After table'))
    })

    test('MonthView renders the months of the year', () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker defaultView="month">
            <DatePicker.MonthView data-testid="view" />
          </DatePicker>
        </CerberusProvider>,
      )
      const view = screen.getByTestId('view')
      expect(view).not.toHaveAttribute('hidden')
      expect(view.querySelector('table')).toHaveAttribute('data-view', 'month')
      const triggers = view.querySelectorAll('[data-part="table-cell-trigger"]')
      expect(triggers).toHaveLength(12)
      expect(triggers[0]).toHaveTextContent('Jan')
      expect(view.querySelectorAll('tbody tr')).toHaveLength(3)
    })

    test('YearView renders the years of the decade', () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker
            defaultView="year"
            defaultFocusedValue={parseDate('2025-03-10')}
          >
            <DatePicker.YearView data-testid="view" />
          </DatePicker>
        </CerberusProvider>,
      )
      const view = screen.getByTestId('view')
      expect(view).not.toHaveAttribute('hidden')
      expect(view.querySelector('table')).toHaveAttribute('data-view', 'year')
      expect(within(view).getByText('2025')).toHaveAttribute(
        'data-part',
        'table-cell-trigger',
      )
    })
  })

  describe('ViewControlGroup', () => {
    test('renders the prev, view and next triggers', async () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker defaultFocusedValue={parseDate('2025-03-10')}>
            <DatePicker.View view="day">
              <DatePicker.ViewControlGroup data-testid="control" />
            </DatePicker.View>
          </DatePicker>
        </CerberusProvider>,
      )
      const control = screen.getByTestId('control')
      expect(control).toHaveAttribute('data-part', 'view-control')
      expect(control.className).toContain('date-picker__viewControl')
      expect(
        within(control).getByRole('button', { name: 'Previous' }),
      ).toHaveAttribute('data-part', 'prev-trigger')
      expect(
        within(control).getByRole('button', { name: 'Next' }),
      ).toHaveAttribute('data-part', 'next-trigger')
      const rangeText = control.querySelector('[data-part="range-text"]')!
      expect(rangeText).toHaveTextContent('March 2025')
      await userEvent.click(
        within(control).getByRole('button', { name: 'Next' }),
      )
      await waitFor(() => expect(rangeText).toHaveTextContent('April 2025'))
    })

    test('applies direct part children as overrides', () => {
      render(
        <CerberusProvider config={config}>
          <DatePicker>
            <DatePicker.View view="day">
              <DatePicker.ViewControlGroup>
                <DatePicker.PrevTrigger>Back</DatePicker.PrevTrigger>
                <DatePicker.NextTrigger data-testid="next" />
                <DatePicker.RangeText data-testid="range-text" />
              </DatePicker.ViewControlGroup>
            </DatePicker.View>
          </DatePicker>
        </CerberusProvider>,
      )
      expect(screen.getByText('Back')).toHaveAttribute(
        'data-part',
        'prev-trigger',
      )
      expect(screen.queryByRole('button', { name: 'Previous' })).toBeNull()
      expect(screen.getByTestId('next')).toHaveAttribute('aria-label', 'Next')
      expect(screen.getByTestId('range-text')).toHaveAttribute(
        'data-part',
        'range-text',
      )
    })
  })
})
