import { datePickerAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const datePickerConfig = defineComponent({
  key: 'date-picker',
  anatomy: datePickerAnatomy,
  description: `
The DatePicker component lets users enter a date, or a range of dates, by typing it in an input or picking it from a calendar.

Use the default \`<DatePicker>\` as the root (its content is placed below the input by default) with \`DatePicker.Label\`, \`DatePicker.InputGroup\` (or \`DatePicker.RangeInputGroup\` with \`selectionMode="range"\`) and \`DatePicker.Calendar\` to render the input with its calendar trigger and the day, month and year views for you, or compose the primitives for full structural control. \`DatePicker.DayView\`, \`DatePicker.MonthView\`, \`DatePicker.YearView\` and \`DatePicker.ViewControlGroup\` build a custom calendar inside \`DatePicker.ContentGroup\`. To use it within a form, wrap it with the Field component.
  `,

  // Ark's parts own the bare names (`Input`, `Trigger`, `Content`), so the v1
  // abstractions that rendered extra structure under part-like names are
  // renamed for what they add: `DatePickerInput` → `InputGroup` (the control
  // with the calendar trigger and the input), `RangePickerInput` →
  // `RangeInputGroup`, the private content abstraction → `ContentGroup` (the
  // content inside its positioner, like `Menu.ContentGroup`) and the private
  // IconButton trigger → `IconTrigger` (like `Dialog.CloseIconTrigger`).
  // `Calendar`, the views and `ViewControlGroup` keep their v1 names
  abstractions: [
    {
      name: 'El',
      file: 'date-picker',
      description:
        'An abstraction of the root that places the calendar content below the start of the input by default',
      isDefaultExport: true,
      types: ['DatePickerProps'],
    },
    {
      name: 'InputGroup',
      file: 'input-group',
      description:
        'An abstraction that renders the control with the calendar trigger and the input',
      types: ['DatePickerInputGroupProps'],
    },
    {
      name: 'RangeInputGroup',
      file: 'range-input-group',
      description:
        'An abstraction that renders the control with the calendar trigger and the start and end inputs of a range',
      types: ['DatePickerRangeInputGroupProps'],
    },
    {
      name: 'IconTrigger',
      file: 'icon-trigger',
      description:
        'An abstraction of the trigger that renders a ghost IconButton with the Cerberus calendar icon',
      types: ['DatePickerIconTriggerProps'],
    },
    {
      name: 'Calendar',
      file: 'calendar',
      description:
        'An abstraction that renders the positioned content with the day, month and year views',
      types: ['DatePickerCalendarProps'],
    },
    {
      name: 'ContentGroup',
      file: 'content-group',
      description:
        'An abstraction that renders the content inside its positioner',
      types: ['DatePickerContentGroupProps'],
    },
    {
      name: 'DayView',
      file: 'day-view',
      description:
        'An abstraction of the day view that renders the view control and the table of week days and days',
      types: ['DatePickerDayViewProps'],
    },
    {
      name: 'MonthView',
      file: 'month-view',
      description:
        'An abstraction of the month view that renders the view control and a table of months',
      types: ['DatePickerMonthViewProps'],
    },
    {
      name: 'YearView',
      file: 'year-view',
      description:
        'An abstraction of the year view that renders the view control and a table of years',
      types: ['DatePickerYearViewProps'],
    },
    {
      name: 'ViewControlGroup',
      file: 'view-control-group',
      description:
        'An abstraction of the view control that renders the previous and next IconButtons and a view trigger Button showing the range text',
      types: ['DatePickerViewControlGroupProps'],
    },
  ],

  // Not exported in v1: a styled `RootProvider` for `useDatePicker()` state
  // (index.client re-exported Ark's raw, unstyled one). `Context` replaces v1
  // `DatePickerContext`. The week number cells are outside the anatomy and are
  // styled like the table cells and headers they sit beside
  arkMembers: [
    'RootProvider',
    'Context',
    'WeekNumberCell',
    'WeekNumberHeaderCell',
  ],
  memberSlots: {
    WeekNumberCell: 'tableCell',
    WeekNumberHeaderCell: 'tableHeader',
  },

  exports: [
    // v1 re-exported `parseDate`, `DateValue` and the @internationalized/date
    // helpers from index.ts, which is generated now. New: the details types of
    // the change callbacks and the `Context` render prop's argument
    {
      from: '@ark-ui/react/date-picker',
      values: ['parseDate'],
      types: [
        'DateValue',
        'DatePickerDateView',
        'DatePickerValueChangeDetails',
        'DatePickerOpenChangeDetails',
        'DatePickerViewChangeDetails',
        'UseDatePickerContext',
      ],
    },
    {
      from: '@internationalized/date',
      values: ['CalendarDate', 'today', 'getLocalTimeZone', 'DateFormatter'],
    },
  ],

  // Keyboard rows come from @zag-js/docs, which doesn't describe Space
  a11y: {
    pattern: 'Date Picker Dialog',
    apgUrl:
      'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/',
    keyboard: [
      {
        key: 'Space',
        description: 'Selects the focused date, like `Enter`.',
      },
    ],
  },
})
