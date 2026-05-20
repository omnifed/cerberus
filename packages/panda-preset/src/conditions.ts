export const conditions = {
  // themes
  cerberusTheme: '[data-panda-theme=cerberus] &',

  // modes
  lightMode: '[data-color-mode=light] &, &.light, .light &',
  darkMode: '[data-color-mode=dark] &, &.dark, .dark &',
  systemMode: '[data-color-mode=system] &, &.system, .system &',

  // visual states
  open: '&:is([open], [data-open], [data-state=open])',
  closed: '&:is([closed], [data-closed], [data-state=closed])',
  modalOpen: '&:is([data-modal-open=true])',
  pinned: '&:is([data-pinned], [data-state=pinned])',
  leftPinned: '&:is([data-pinned=left])',
  rightPinned: '&:is([data-pinned=right])',

  // D&D
  isOver: '&:is([data-over=true], [data-dragging])',
  isDropped: '&:is([data-dropped=true])',
  isComplete: '&:is([data-complete=true])',

  // Motion states
  paused: '&:is([data-paused], [data-paused=true], [data-state=paused])',
  reverse: '&:is([data-reverse], [data-reverse=true])',

  // UI states
  placeholderShown: '&:is([data-placeholder-shown])',
  screenReaderOnly: '&:is([data-screen-reader-only=true])',

  // input states
  checked: '&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])',
  indeterminate: '&:is([data-state=indeterminate])',
  dataReadOnly: '&:is([data-readonly])',
  userInvalid: '&:is(:user-invalid, [aria-invalid], [data-invalid])',
  groupInvalid: '.group:is([data-invalid] &, [aria-invalid]) &',
  groupChecked: '.group:is([data-checked="true"] &, [aria-checked="true"]) &',
  notDisabled: '&:is(:not([disabled]), [data-disabled=false])',

  // emphasis
  highEmphasis: '&:is([data-emphasis=high])',
  subtleEmphasis: '&:is([data-emphasis=subtle])',
  lowEmphasis: '&:is([data-emphasis=low])',

  // dates
  today: '&:is([data-today=true], [data-date=today])',
  pastDay: '&:is([data-past-day=true], [data-date=past])',
  inRange: '&:is([data-in-range])',
  startRange: '&:is([data-range-start])',
  endRange: '&:is([data-range-end])',

  // positions
  positionBottom: '&:is([data-position=bottom])',
  positionTop: '&:is([data-position=top])',
  positionLeft: '&:is([data-position=left])',
  positionRight: '&:is([data-position=right])',
  startIndicator: '&:is([data-indicator-position=start])',
  endIndicator: '&:is([data-indicator-position=end])',

  // orientations
  horizontal: '&:is([data-orientation=horizontal])',
  vertical: '&:is([data-orientation=vertical])',

  // sides
  sideBottom: '&:is([data-side=bottom])',
  sideTop: '&:is([data-side=top])',
  sideStart: '&:is([data-side=start])',
  sideEnd: '&:is([data-side=end])',

  // sizes
  xsSize: '&:is([data-size=xs])',
  smSize: '&:is([data-size=sm])',
  mdSize: '&:is([data-size=md])',
  lgSize: '&:is([data-size=lg])',
  xlSize: '&:is([data-size=xl])',

  // elements
  button: '& :where([data-scope=button])',
  icon: '& :where(svg)',
  iconButton: '& :where([data-scope=icon-button])',
  menuTrigger: '& :where([data-scope=menu][data-part=trigger])',
  notify: '&:is([data-notify=true])',
  startIcon: '&:is([data-start-icon=true])',
  tooltip: '&:is([data-tooltip=true])',

  // roles
  admin: '&:is([data-role=admin])',
  student: '&:is([data-role=student])',
  user: '&:is([data-role=user])',

  // highlights
  highlight: '&:is(::selection)',
  spellingError: '&:is(::spelling-error)',
  grammarError: '&:is(::grammar-error)',

  // palettes
  pagePalette: '&:is([data-palette=page])',
  actionPalette: '&:is([data-palette=action])',
  secondaryActionPalette: '&:is([data-palette=secondaryAction])',
  infoPalette: '&:is([data-palette=info])',
  successPalette: '&:is([data-palette=success])',
  warningPalette: '&:is([data-palette=warning])',
  dangerPalette: '&:is([data-palette=danger])',

  // palette types
  page: '&:is([data-type=page], [data-type=loading])',
  action: '&:is([data-type=action])',
  secondaryAction: '&:is([data-type=secondaryAction])',
  info: '&:is([data-type=info])',
  success: '&:is([data-type=success])',
  warning: '&:is([data-type=warning])',
  danger: '&:is([data-type=danger], [data-type=error])',
}
