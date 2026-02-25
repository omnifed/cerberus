/* eslint-disable */
import type { AnySelector, Selectors } from './selectors'

export interface Conditions {
  /** `[data-panda-theme=cerberus] &` */
  _cerberusTheme: string
  /** `[data-color-mode=light] &, &.light, .light &` */
  _lightMode: string
  /** `[data-color-mode=dark] &, &.dark, .dark &` */
  _darkMode: string
  /** `[data-color-mode=system] &, &.system, .system &` */
  _systemMode: string
  /** `&:is([open], [data-open], [data-state=open])` */
  _open: string
  /** `&:is([closed], [data-closed], [data-state=closed])` */
  _closed: string
  /** `&:is([data-modal-open=true])` */
  _modalOpen: string
  /** `&:is([data-pinned], [data-state=pinned])` */
  _pinned: string
  /** `&:is([data-pinned=left])` */
  _leftPinned: string
  /** `&:is([data-pinned=right])` */
  _rightPinned: string
  /** `&:is([data-over=true], [data-dragging])` */
  _isOver: string
  /** `&:is([data-dropped=true])` */
  _isDropped: string
  /** `&:is([data-complete=true])` */
  _isComplete: string
  /** `&:is([data-placeholder-shown])` */
  _placeholderShown: string
  /** `&:is([data-screen-reader-only=true])` */
  _screenReaderOnly: string
  /** `&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])` */
  _checked: string
  /** `&:is([data-state=indeterminate])` */
  _indeterminate: string
  /** `&:is([data-readonly])` */
  _dataReadOnly: string
  /** `&:is(:user-invalid, [aria-invalid], [data-invalid])` */
  _userInvalid: string
  /** `.group:is([data-invalid] &, [aria-invalid]) &` */
  _groupInvalid: string
  /** `.group:is([data-checked="true"] &, [aria-checked="true"]) &` */
  _groupChecked: string
  /** `&:is(:not([disabled]), [data-disabled=false])` */
  _notDisabled: string
  /** `&:is([data-emphasis=high])` */
  _highEmphasis: string
  /** `&:is([data-emphasis=low])` */
  _lowEmphasis: string
  /** `&:is([data-today=true], [data-date=today])` */
  _today: string
  /** `&:is([data-past-day=true], [data-date=past])` */
  _pastDay: string
  /** `&:is([data-in-range])` */
  _inRange: string
  /** `&:is([data-range-start])` */
  _startRange: string
  /** `&:is([data-range-end])` */
  _endRange: string
  /** `&:is([data-position=bottom])` */
  _positionBottom: string
  /** `&:is([data-position=top])` */
  _positionTop: string
  /** `&:is([data-position=left])` */
  _positionLeft: string
  /** `&:is([data-position=right])` */
  _positionRight: string
  /** `&:is([data-indicator-position=start])` */
  _startIndicator: string
  /** `&:is([data-indicator-position=end])` */
  _endIndicator: string
  /** `&:is([data-orientation=horizontal])` */
  _horizontal: string
  /** `&:is([data-orientation=vertical])` */
  _vertical: string
  /** `&:is([data-size=xs])` */
  _xsSize: string
  /** `&:is([data-size=sm])` */
  _smSize: string
  /** `&:is([data-size=md])` */
  _mdSize: string
  /** `&:is([data-size=lg])` */
  _lgSize: string
  /** `&:is([data-size=xl])` */
  _xlSize: string
  /** `&:is([data-notify=true])` */
  _notify: string
  /** `&:is([data-start-icon=true])` */
  _startIcon: string
  /** `&:is([data-tooltip=true])` */
  _tooltip: string
  /** `&:is([data-role=admin])` */
  _admin: string
  /** `&:is([data-role=student])` */
  _student: string
  /** `&:is([data-role=user])` */
  _user: string
  /** `&:is(::selection)` */
  _highlight: string
  /** `&:is(::spelling-error)` */
  _spellingError: string
  /** `&:is(::grammar-error)` */
  _grammarError: string
  /** `&:is([data-palette=page])` */
  _pagePalette: string
  /** `&:is([data-palette=action])` */
  _actionPalette: string
  /** `&:is([data-palette=secondaryAction])` */
  _secondaryActionPalette: string
  /** `&:is([data-palette=info])` */
  _infoPalette: string
  /** `&:is([data-palette=success])` */
  _successPalette: string
  /** `&:is([data-palette=warning])` */
  _warningPalette: string
  /** `&:is([data-palette=danger])` */
  _dangerPalette: string
  /** `&:is([data-type=page], [data-type=page-subtle], [data-type=loading])` */
  _page: string
  /** `&:is([data-type=action], [data-type=action-subtle])` */
  _action: string
  /** `&:is([data-type=secondaryAction], [data-type=secondaryAction-subtle])` */
  _secondaryAction: string
  /** `&:is([data-type=info], [data-type=info-subtle])` */
  _info: string
  /** `&:is([data-type=success], [data-type=success-subtle])` */
  _success: string
  /** `&:is([data-type=warning], [data-type=warning-subtle])` */
  _warning: string
  /** `&:is([data-type=danger], [data-type=danger-subtle], [data-type=error])` */
  _danger: string
  /** `&:is(:hover, [data-hover])` */
  _hover: string
  /** `&:is(:focus, [data-focus])` */
  _focus: string
  /** `&:focus-within` */
  _focusWithin: string
  /** `&:is(:focus-visible, [data-focus-visible])` */
  _focusVisible: string
  /** `&:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])` */
  _disabled: string
  /** `&:is(:active, [data-active])` */
  _active: string
  /** `&:visited` */
  _visited: string
  /** `&:target` */
  _target: string
  /** `&:is(:read-only, [data-read-only], [aria-readonly=true])` */
  _readOnly: string
  /** `&:read-write` */
  _readWrite: string
  /** `&:is(:empty, [data-empty])` */
  _empty: string
  /** `&:enabled` */
  _enabled: string
  /** `&:is([aria-expanded=true], [data-expanded], [data-state="expanded"])` */
  _expanded: string
  /** `&[data-highlighted]` */
  _highlighted: string
  /** `&[data-complete]` */
  _complete: string
  /** `&[data-incomplete]` */
  _incomplete: string
  /** `&[data-dragging]` */
  _dragging: string
  /** `&::before` */
  _before: string
  /** `&::after` */
  _after: string
  /** `&::first-letter` */
  _firstLetter: string
  /** `&::first-line` */
  _firstLine: string
  /** `&::marker, &::-webkit-details-marker` */
  _marker: string
  /** `&::selection` */
  _selection: string
  /** `&::file-selector-button` */
  _file: string
  /** `&::backdrop` */
  _backdrop: string
  /** `&:first-child` */
  _first: string
  /** `&:last-child` */
  _last: string
  /** `&:only-child` */
  _only: string
  /** `&:nth-child(even)` */
  _even: string
  /** `&:nth-child(odd)` */
  _odd: string
  /** `&:first-of-type` */
  _firstOfType: string
  /** `&:last-of-type` */
  _lastOfType: string
  /** `&:only-of-type` */
  _onlyOfType: string
  /** `.peer:is(:focus, [data-focus]) ~ &` */
  _peerFocus: string
  /** `.peer:is(:hover, [data-hover]) ~ &` */
  _peerHover: string
  /** `.peer:is(:active, [data-active]) ~ &` */
  _peerActive: string
  /** `.peer:focus-within ~ &` */
  _peerFocusWithin: string
  /** `.peer:is(:focus-visible, [data-focus-visible]) ~ &` */
  _peerFocusVisible: string
  /** `.peer:is(:disabled, [disabled], [data-disabled], [aria-disabled=true]) ~ &` */
  _peerDisabled: string
  /** `.peer:is(:checked, [data-checked], [aria-checked=true], [data-state="checked"]) ~ &` */
  _peerChecked: string
  /** `.peer:is(:invalid, [data-invalid], [aria-invalid=true]) ~ &` */
  _peerInvalid: string
  /** `.peer:is([aria-expanded=true], [data-expanded], [data-state="expanded"]) ~ &` */
  _peerExpanded: string
  /** `.peer:placeholder-shown ~ &` */
  _peerPlaceholderShown: string
  /** `.group:is(:focus, [data-focus]) &` */
  _groupFocus: string
  /** `.group:is(:hover, [data-hover]) &` */
  _groupHover: string
  /** `.group:is(:active, [data-active]) &` */
  _groupActive: string
  /** `.group:focus-within &` */
  _groupFocusWithin: string
  /** `.group:is(:focus-visible, [data-focus-visible]) &` */
  _groupFocusVisible: string
  /** `.group:is(:disabled, [disabled], [data-disabled], [aria-disabled=true]) &` */
  _groupDisabled: string
  /** `.group:is([aria-expanded=true], [data-expanded], [data-state="expanded"]) &` */
  _groupExpanded: string
  /** `&:is(:required, [data-required], [aria-required=true])` */
  _required: string
  /** `&:is(:valid, [data-valid])` */
  _valid: string
  /** `&:is(:invalid, [data-invalid], [aria-invalid=true])` */
  _invalid: string
  /** `&:autofill` */
  _autofill: string
  /** `&:is(:out-of-range, [data-outside-range])` */
  _outOfRange: string
  /** `&::placeholder, &[data-placeholder]` */
  _placeholder: string
  /** `&:is([aria-pressed=true], [data-pressed])` */
  _pressed: string
  /** `&:is([aria-selected=true], [data-selected])` */
  _selected: string
  /** `&:is([aria-grabbed=true], [data-grabbed])` */
  _grabbed: string
  /** `&[data-state=under-value]` */
  _underValue: string
  /** `&[data-state=over-value]` */
  _overValue: string
  /** `&[data-state=at-value]` */
  _atValue: string
  /** `&:default` */
  _default: string
  /** `&:optional` */
  _optional: string
  /** `&:is(:fullscreen, [data-fullscreen])` */
  _fullscreen: string
  /** `&:is([data-loading], [aria-busy=true])` */
  _loading: string
  /** `&:is([hidden], [data-hidden])` */
  _hidden: string
  /** `&:is([aria-current=true], [data-current])` */
  _current: string
  /** `&[aria-current=page]` */
  _currentPage: string
  /** `&[aria-current=step]` */
  _currentStep: string
  /** `&[data-unavailable]` */
  _unavailable: string
  /** `&[data-range-start]` */
  _rangeStart: string
  /** `&[data-range-end]` */
  _rangeEnd: string
  /** `&[data-now]` */
  _now: string
  /** `&[data-topmost]` */
  _topmost: string
  /** `@media (prefers-reduced-motion: reduce)` */
  _motionReduce: string
  /** `@media (prefers-reduced-motion: no-preference)` */
  _motionSafe: string
  /** `@media print` */
  _print: string
  /** `@media (orientation: landscape)` */
  _landscape: string
  /** `@media (orientation: portrait)` */
  _portrait: string
  /** `.dark &` */
  _dark: string
  /** `.light &` */
  _light: string
  /** `@media (prefers-color-scheme: dark)` */
  _osDark: string
  /** `@media (prefers-color-scheme: light)` */
  _osLight: string
  /** `@media (forced-colors: active)` */
  _highContrast: string
  /** `@media (prefers-contrast: less)` */
  _lessContrast: string
  /** `@media (prefers-contrast: more)` */
  _moreContrast: string
  /** `:where([dir=ltr], :dir(ltr)) &` */
  _ltr: string
  /** `:where([dir=rtl], :dir(rtl)) &` */
  _rtl: string
  /** `&::-webkit-scrollbar` */
  _scrollbar: string
  /** `&::-webkit-scrollbar-thumb` */
  _scrollbarThumb: string
  /** `&::-webkit-scrollbar-track` */
  _scrollbarTrack: string
  /** `& :where(svg)` */
  _icon: string
  /** `@starting-style` */
  _starting: string
  /** `@media (scripting: none)` */
  _noscript: string
  /** `@media (inverted-colors: inverted)` */
  _invertedColors: string
  /** `@media screen and (min-width: 40rem)` */
  sm: string
  /** `@media screen and (min-width: 40rem) and (max-width: 47.9975rem)` */
  smOnly: string
  /** `@media screen and (max-width: 39.9975rem)` */
  smDown: string
  /** `@media screen and (min-width: 48rem)` */
  md: string
  /** `@media screen and (min-width: 48rem) and (max-width: 63.9975rem)` */
  mdOnly: string
  /** `@media screen and (max-width: 47.9975rem)` */
  mdDown: string
  /** `@media screen and (min-width: 64rem)` */
  lg: string
  /** `@media screen and (min-width: 64rem) and (max-width: 79.9975rem)` */
  lgOnly: string
  /** `@media screen and (max-width: 63.9975rem)` */
  lgDown: string
  /** `@media screen and (min-width: 80rem)` */
  xl: string
  /** `@media screen and (min-width: 80rem) and (max-width: 95.9975rem)` */
  xlOnly: string
  /** `@media screen and (max-width: 79.9975rem)` */
  xlDown: string
  /** `@media screen and (min-width: 96rem)` */
  '2xl': string
  /** `@media screen and (min-width: 96rem)` */
  '2xlOnly': string
  /** `@media screen and (max-width: 95.9975rem)` */
  '2xlDown': string
  /** `@media screen and (min-width: 40rem) and (max-width: 47.9975rem)` */
  smToMd: string
  /** `@media screen and (min-width: 40rem) and (max-width: 63.9975rem)` */
  smToLg: string
  /** `@media screen and (min-width: 40rem) and (max-width: 79.9975rem)` */
  smToXl: string
  /** `@media screen and (min-width: 40rem) and (max-width: 95.9975rem)` */
  smTo2xl: string
  /** `@media screen and (min-width: 48rem) and (max-width: 63.9975rem)` */
  mdToLg: string
  /** `@media screen and (min-width: 48rem) and (max-width: 79.9975rem)` */
  mdToXl: string
  /** `@media screen and (min-width: 48rem) and (max-width: 95.9975rem)` */
  mdTo2xl: string
  /** `@media screen and (min-width: 64rem) and (max-width: 79.9975rem)` */
  lgToXl: string
  /** `@media screen and (min-width: 64rem) and (max-width: 95.9975rem)` */
  lgTo2xl: string
  /** `@media screen and (min-width: 80rem) and (max-width: 95.9975rem)` */
  xlTo2xl: string
  /** `@container  (min-width: 20rem)` */
  '@/xs': string
  /** `@container  (min-width: 24rem)` */
  '@/sm': string
  /** `@container  (min-width: 28rem)` */
  '@/md': string
  /** `@container  (min-width: 32rem)` */
  '@/lg': string
  /** `@container  (min-width: 36rem)` */
  '@/xl': string
  /** `@container  (min-width: 42rem)` */
  '@/2xl': string
  /** `@container  (min-width: 48rem)` */
  '@/3xl': string
  /** `@container  (min-width: 56rem)` */
  '@/4xl': string
  /** `@container  (min-width: 64rem)` */
  '@/5xl': string
  /** `@container  (min-width: 72rem)` */
  '@/6xl': string
  /** `@container  (min-width: 80rem)` */
  '@/7xl': string
  /** `@container  (min-width: 90rem)` */
  '@/8xl': string
  /** `[data-panda-theme=cerberus] &` */
  _themeCerberus: string
  /** The base (=no conditions) styles to apply  */
  base: string
}

export type ConditionalValue<V> =
  | V
  | Array<V | null>
  | {
      [K in keyof Conditions]?: ConditionalValue<V>
    }

export type Nested<P> = P & {
  [K in Selectors]?: Nested<P>
} & {
  [K in AnySelector]?: Nested<P>
} & {
  [K in keyof Conditions]?: Nested<P>
}
