# DatePicker API reference

The DatePicker component lets users enter a date, or a range of dates, by typing it in an input or picking it from a calendar.

Use the default `<DatePicker>` as the root (its content is placed below the input by default) with `DatePicker.Label`, `DatePicker.InputGroup` (or `DatePicker.RangeInputGroup` with `selectionMode="range"`) and `DatePicker.Calendar` to render the input with its calendar trigger and the day, month and year views for you, or compose the primitives for full structural control. `DatePicker.DayView`, `DatePicker.MonthView`, `DatePicker.YearView` and `DatePicker.ViewControlGroup` build a custom calendar inside `DatePicker.ContentGroup`. To use it within a form, wrap it with the Field component.

Import: `import { DatePicker } from '@cerberus/react'`

<!-- api-reference -->

## Parts

### DatePicker.El (abstraction)

An abstraction of the root that places the calendar content below the start of the input by default

Also accepts all props of `DatePicker.Root`.

### DatePicker.InputGroup (abstraction)

An abstraction that renders the control with the calendar trigger and the input

Also accepts all props of `DatePicker.Input`.

### DatePicker.RangeInputGroup (abstraction)

An abstraction that renders the control with the calendar trigger and the start and end inputs of a range

Also accepts all props of `DatePicker.Input`.

### DatePicker.IconTrigger (abstraction)

An abstraction of the trigger that renders a ghost IconButton with the Cerberus calendar icon

Also accepts all props of `DatePicker.Trigger`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `ariaLabel` | `string` | No | `'Open calendar'` | The accessible label of the trigger. |

### DatePicker.Calendar (abstraction)

An abstraction that renders the positioned content with the day, month and year views

Also accepts all props of `DatePicker.Content`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `withModal` | `boolean` | No | — | **Deprecated.** this is no longer needed. |

### DatePicker.ContentGroup (abstraction)

An abstraction that renders the content inside its positioner

Also accepts all props of `DatePicker.Content`.

### DatePicker.DayView (abstraction)

An abstraction of the day view that renders the view control and the table of week days and days

Also accepts all props of `DatePicker.View`.

### DatePicker.MonthView (abstraction)

An abstraction of the month view that renders the view control and a table of months

Also accepts all props of `DatePicker.View`.

### DatePicker.YearView (abstraction)

An abstraction of the year view that renders the view control and a table of years

Also accepts all props of `DatePicker.View`.

### DatePicker.ViewControlGroup (abstraction)

An abstraction of the view control that renders the previous and next IconButtons and a view trigger Button showing the range text

Also accepts all props of `DatePicker.ViewControl`.

### DatePicker.ClearTrigger (primitive)

The clear trigger primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="clear-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### DatePicker.Content (primitive)

The content primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="content"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-placement` | The placement of the content. |
| `data-side` | The side of the trigger that the content is positioned on. |
| `data-inline` | Present when the content is inline. |
| `data-nested` | popover. |
| `data-has-nested` | popover. |

| CSS variable | Description |
| --- | --- |
| `--layer-index` | The index of the dismissable in the layer stack. |
| `--nested-layer-count` | The number of nested date-pickers. |

### DatePicker.Control (primitive)

The control primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="control"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-placeholder-shown` | Present when placeholder is shown. |
| `data-invalid` | Present when invalid. |

### DatePicker.Input (primitive)

The input primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="input"]`

Keyboard: `Enter`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `index` | `number` | No | — | The index of the input to focus. |
| `fixOnBlur` | `boolean` | No | `true` | Whether to fix the input value on blur. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-index` | The index of the item. |
| `data-state` | `"open"` \| `"closed"` |
| `data-placeholder-shown` | Present when placeholder is shown. |
| `data-invalid` | Present when invalid. |

### DatePicker.Label (primitive)

The label primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-index` | The index of the item. |
| `data-disabled` | Present when disabled. |
| `data-readonly` | Present when read-only. |
| `data-invalid` | Present when invalid. |

### DatePicker.MonthSelect (primitive)

The month select primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="month-select"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### DatePicker.NextTrigger (primitive)

The next trigger primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="next-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |

### DatePicker.Positioner (primitive)

The positioner primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="positioner"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| CSS variable | Description |
| --- | --- |
| `--reference-width` | The width of the reference element. |
| `--reference-height` | The height of the root. |
| `--available-width` | The available width in viewport. |
| `--available-height` | The available height in viewport. |
| `--x` | The x position for transform. |
| `--y` | The y position for transform. |
| `--z-index` | The z-index value. |
| `--transform-origin` | The transform origin for animations. |

### DatePicker.PresetTrigger (primitive)

The preset trigger primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="preset-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `PresetTriggerValue` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### DatePicker.PrevTrigger (primitive)

The prev trigger primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="prev-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |

### DatePicker.RangeText (primitive)

The range text primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="range-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### DatePicker.Root (primitive)

The root container of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `locale` | `string` | No | `"en-US"` | The locale (BCP 47 language tag) to use when formatting the date. |
| `createCalendar` | `((identifier: CalendarIdentifier) => Calendar)` | No | — | A function that creates a Calendar object for a given calendar identifier. Enables non-Gregorian calendar support (Persian, Buddhist, Islamic, etc.) without bundling all calendars by default. |
| `translations` | `IntlTranslations` | No | — | The localized messages to use. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the date picker. Useful for composition. |
| `name` | `string` | No | — | The `name` attribute of the input element. |
| `timeZone` | `string` | No | `"UTC"` | The time zone to use |
| `disabled` | `boolean` | No | — | Whether the calendar is disabled. |
| `readOnly` | `boolean` | No | — | Whether the calendar is read-only. |
| `required` | `boolean` | No | — | Whether the date picker is required |
| `invalid` | `boolean` | No | — | Whether the date picker is invalid |
| `outsideDaySelectable` | `boolean` | No | `false` | Whether day outside the visible range can be selected. |
| `min` | `DateValue` | No | — | The minimum date that can be selected. |
| `max` | `DateValue` | No | — | The maximum date that can be selected. |
| `closeOnSelect` | `boolean` | No | `true` | Whether the calendar should close after the date selection is complete. This is ignored when the selection mode is `multiple`. |
| `openOnClick` | `boolean` | No | `false` | Whether to open the calendar when the input is clicked. |
| `value` | `DateValue[]` | No | — | The controlled selected date(s). |
| `defaultValue` | `DateValue[]` | No | — | The initial selected date(s) when rendered. Use when you don't need to control the selected date(s) of the date picker. |
| `focusedValue` | `DateValue` | No | — | The controlled focused date. |
| `defaultFocusedValue` | `DateValue` | No | — | The initial focused date when rendered. Use when you don't need to control the focused date of the date picker. |
| `numOfMonths` | `number` | No | — | The number of months to display. |
| `startOfWeek` | `number` | No | — | The first day of the week. `0` - Sunday `1` - Monday `2` - Tuesday `3` - Wednesday `4` - Thursday `5` - Friday `6` - Saturday |
| `fixedWeeks` | `boolean` | No | — | Whether the calendar should have a fixed number of weeks. This renders the calendar with 6 weeks instead of 5 or 6. |
| `showWeekNumbers` | `boolean` | No | — | Whether to show the week number column in the day view. |
| `onValueChange` | `((details: ValueChangeDetails) => void)` | No | — | Function called when the value changes. |
| `onFocusChange` | `((details: FocusChangeDetails) => void)` | No | — | Function called when the focused date changes. |
| `onViewChange` | `((details: ViewChangeDetails) => void)` | No | — | Function called when the view changes. |
| `onVisibleRangeChange` | `((details: VisibleRangeChangeDetails) => void)` | No | — | Function called when the visible range changes. |
| `onOpenChange` | `((details: OpenChangeDetails) => void)` | No | — | Function called when the calendar opens or closes. |
| `isDateUnavailable` | `((date: DateValue, locale: string) => boolean)` | No | — | Returns whether a date of the calendar is available. |
| `selectionMode` | `SelectionMode` | No | `"single"` | The selection mode of the calendar. - `single` - only one date can be selected - `multiple` - multiple dates can be selected - `range` - a range of dates can be selected |
| `maxSelectedDates` | `number` | No | — | The maximum number of dates that can be selected. This is only applicable when `selectionMode` is `multiple`. |
| `format` | `((date: DateValue, details: LocaleDetails) => string)` | No | — | The format of the date to display in the input. |
| `parse` | `((value: string, details: LocaleDetails) => DateValue \| undefined)` | No | — | Function to parse the date from the input back to a DateValue. |
| `placeholder` | `string` | No | — | The placeholder text to display in the input. |
| `view` | `DateView` | No | — | The view of the calendar |
| `defaultView` | `DateView` | No | `"day"` | The default view of the calendar |
| `minView` | `DateView` | No | `"day"` | The minimum view of the calendar |
| `maxView` | `DateView` | No | `"year"` | The maximum view of the calendar |
| `positioning` | `PositioningOptions` | No | — | The user provided options used to position the date picker content |
| `open` | `boolean` | No | — | The controlled open state of the date picker |
| `defaultOpen` | `boolean` | No | — | The initial open state of the date picker when rendered. Use when you don't need to control the open state of the date picker. |
| `inline` | `boolean` | No | — | Whether to render the date picker inline |
| `present` | `boolean` | No | — | Whether the node is present (controlled by the user) |
| `onExitComplete` | `VoidFunction` | No | — | Function called when the animation ends in the closed state |
| `onEnterComplete` | `VoidFunction` | No | — | Function called when the animation ends in the open state |
| `immediate` | `boolean` | No | — | Whether to synchronize the present change immediately or defer it to the next frame |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `skipAnimationOnMount` | `boolean` | No | `false` | Whether to allow the initial presence animation. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-disabled` | Present when disabled. |
| `data-readonly` | Present when read-only. |
| `data-empty` | Present when the content is empty. |

### DatePicker.Table (primitive)

The table primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="table"]`

Keyboard: `Enter`, `Space`, `ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowDown`, `PageUp`, `PageDown`, `Home`, `End`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `columns` | `number` | No | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-columns` | Set by the component |
| `data-view` | The view of the table. |

### DatePicker.TableBody (primitive)

The table body primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="table-body"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-view` | The view of the table body. |
| `data-disabled` | Present when disabled. |

### DatePicker.TableCell (primitive)

The table cell primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="table-cell"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `number \| DateValue` | Yes | — |  |
| `disabled` | `boolean` | No | — |  |
| `visibleRange` | `VisibleRange` | No | — |  |
| `columns` | `number` | No | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### DatePicker.TableCellTrigger (primitive)

The table cell trigger primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="table-cell-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### DatePicker.TableHead (primitive)

The table head primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="table-head"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-view` | The view of the table head. |
| `data-disabled` | Present when disabled. |

### DatePicker.TableHeader (primitive)

The table header primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="table-header"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-view` | The view of the table header. |
| `data-disabled` | Present when disabled. |

### DatePicker.TableRow (primitive)

The table row primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="table-row"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-view` | The view of the table row. |

### DatePicker.Trigger (primitive)

The trigger primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-placement` | The placement of the trigger. |
| `data-side` | The side of the trigger that the trigger is positioned on. |
| `data-state` | `"open"` \| `"closed"` |
| `data-placeholder-shown` | Present when placeholder is shown. |

### DatePicker.View (primitive)

The view primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="view"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `view` | `DateView` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-view` | The view of the view. |

### DatePicker.ViewControl (primitive)

The view control primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="view-control"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-view` | The view of the view control. |

### DatePicker.ViewTrigger (primitive)

The view trigger primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="view-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-view` | The view of the view trigger. |
| `data-disabled` | Present when disabled. |

### DatePicker.YearSelect (primitive)

The year select primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="year-select"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### DatePicker.ValueText (primitive)

The value text primitive part of the DatePicker component.

Selector: `[data-scope="date-picker"][data-part="value-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `placeholder` | `string` | No | — | Text to display when no date is selected. |
| `children` | `((props: DatePickerValueTextRenderProps) => React.ReactNode)` | No | — | A function to render each selected date value. When provided, each date in the selection will be rendered using this function. |
| `separator` | `string` | No | `", "` | The separator to use between multiple date values when using default rendering. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### DatePicker.RootProvider (primitive)

The root container of the DatePicker component, driven by state created with `useDatePicker()`.

Selector: `[data-scope="date-picker"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `UseDatePickerReturn` | Yes | — |  |
| `present` | `boolean` | No | — | Whether the node is present (controlled by the user) |
| `onExitComplete` | `VoidFunction` | No | — | Function called when the animation ends in the closed state |
| `onEnterComplete` | `VoidFunction` | No | — | Function called when the animation ends in the open state |
| `immediate` | `boolean` | No | — | Whether to synchronize the present change immediately or defer it to the next frame |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `skipAnimationOnMount` | `boolean` | No | `false` | Whether to allow the initial presence animation. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-disabled` | Present when disabled. |
| `data-readonly` | Present when read-only. |
| `data-empty` | Present when the content is empty. |

### DatePicker.Context (primitive)

Exposes the DatePicker state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseDatePickerContext) => ReactNode` | Yes | — |  |

### DatePicker.WeekNumberCell (primitive)

The week number cell primitive part of the DatePicker component, styled with the `tableCell` slot.

Selector: `[data-scope="date-picker"][data-part="table-cell"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `weekIndex` | `number` | Yes | — |  |
| `week` | `DateValue[]` | Yes | — |  |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### DatePicker.WeekNumberHeaderCell (primitive)

The week number header cell primitive part of the DatePicker component, styled with the `tableHeader` slot.

Selector: `[data-scope="date-picker"][data-part="table-header"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-view` | The view of the table header. |
| `data-disabled` | Present when disabled. |

## Context API

`DatePicker.Context` and `useDatePicker()` expose the component's state and methods:

| Property | Type | Description |
| --- | --- | --- |
| `focused` | `boolean` | Whether the input is focused. |
| `open` | `boolean` | Whether the date picker is open. |
| `disabled` | `boolean` | Whether the date picker is disabled. |
| `invalid` | `boolean` | Whether the date picker is invalid. |
| `readOnly` | `boolean` | Whether the date picker is read-only. |
| `inline` | `boolean` | Whether the date picker is rendered inline. |
| `numOfMonths` | `number` | The number of months to display. |
| `showWeekNumbers` | `boolean` | Whether the week number column is shown in the day view. |
| `selectionMode` | `SelectionMode` | The selection mode (single, multiple, or range). |
| `maxSelectedDates` | `number \| undefined` | The maximum number of dates that can be selected (only for multiple selection mode). |
| `isMaxSelected` | `boolean` | Whether the maximum number of selected dates has been reached. |
| `view` | `DateView` | The current view of the date picker. |
| `getWeekNumber` | `(week: DateValue[]) => number` | Returns the ISO 8601 week number (1-53) for the given week (array of dates). |
| `getDaysInWeek` | `(week: number, from?: DateValue) => DateValue[]` | Returns an array of days in the week index counted from the provided start date, or the first visible date if not given. |
| `getOffset` | `(duration: DateDuration) => DateValueOffset` | Returns the offset of the month based on the provided number of months. |
| `getRangePresetValue` | `(value: DateRangePreset) => DateValue[]` | Returns the range of dates based on the provided date range preset. |
| `getMonthWeeks` | `(from?: DateValue) => DateValue[][]` | Returns the weeks of the month from the provided date. Represented as an array of arrays of dates. |
| `isUnavailable` | `(date: DateValue) => boolean` | Returns whether the provided date is available (or can be selected). |
| `weeks` | `DateValue[][]` | The weeks of the month. Represented as an array of arrays of dates. |
| `weekDays` | `WeekDay[]` | The days of the week. Represented as an array of strings. |
| `visibleRange` | `VisibleRange` | The visible range of dates. |
| `visibleRangeText` | `VisibleRangeText` | The human readable text for the visible range of dates. |
| `value` | `DateValue[]` | The selected date. |
| `valueAsDate` | `Date[]` | The selected date as a Date object. |
| `valueAsString` | `string[]` | The selected date as a string. |
| `focusedValue` | `DateValue` | The focused date. |
| `focusedValueAsDate` | `Date` | The focused date as a Date object. |
| `focusedValueAsString` | `string` | The focused date as a string. |
| `selectToday` | `VoidFunction` | Sets the selected date to today. |
| `setValue` | `(values: DateValue[]) => void` | Sets the selected date to the given date. |
| `setTime` | `(time: Time, index?: number) => void` | Sets the time for a specific date value. Converts CalendarDate to CalendarDateTime if needed. |
| `setFocusedValue` | `(value: DateValue) => void` | Sets the focused date to the given date. |
| `clearValue` | `(options?: { focus?: boolean }) => void` | Clears the selected date(s). |
| `setOpen` | `(open: boolean) => void` | Function to open or close the calendar. |
| `focusMonth` | `(month: number) => void` | Function to set the selected month. |
| `focusYear` | `(year: number) => void` | Function to set the selected year. |
| `getYears` | `() => Cell[]` | Returns the months of the year. |
| `getYearsGrid` | `(props?: YearGridProps) => YearGridValue` | Returns the years of the decade based on the columns. Represented as an array of arrays of years. |
| `getDecade` | `() => Range<number \| undefined>` | Returns the start and end years of the decade. |
| `getMonths` | `(props?: MonthFormatOptions) => Cell[]` | Returns the months of the year. |
| `getMonthsGrid` | `(props?: MonthGridProps) => MonthGridValue` | Returns the months of the year based on the columns. Represented as an array of arrays of months. |
| `format` | `(value: DateValue, opts?: Intl.DateTimeFormatOptions) => string` | Formats the given date value based on the provided options. |
| `setView` | `(view: DateView) => void` | Sets the view of the date picker. |
| `goToNext` | `VoidFunction` | Goes to the next month/year/decade. |
| `goToPrev` | `VoidFunction` | Goes to the previous month/year/decade. |
| `getDayTableCellState` | `(props: DayTableCellProps) => DayTableCellState` | Returns the state details for a given cell. |
| `getMonthTableCellState` | `(props: TableCellProps) => TableCellState` | Returns the state details for a given month cell. |
| `getYearTableCellState` | `(props: TableCellProps) => TableCellState` | Returns the state details for a given year cell. |

## Accessibility

Follows the [Date Picker Dialog WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/).

| Key | Description |
| --- | --- |
| `ArrowLeft` | Moves focus to the previous day within the current week. |
| `ArrowRight` | Moves focus to the next day within the current week. |
| `ArrowUp` | Moves focus to the same day of the week in the previous week. |
| `ArrowDown` | Moves focus to the same day of the week in the next week. |
| `Home` | Moves focus to the first day of the current month. |
| `End` | Moves focus to the last day of the current month. |
| `PageUp` | Moves focus to the same day of the month in the previous month. |
| `PageDown` | Moves focus to the same day of the month in the next month. |
| `Enter` | Selects the focused date and closes the date picker. |
| `Escape` | Closes the date picker without selecting any date. |
| `Space` | Selects the focused date, like `Enter`. |
