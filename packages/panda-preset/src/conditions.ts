export const conditions = {
  // themes
  cerberusTheme: '[data-panda-theme=cerberus] &',
  acheronTheme: '[data-panda-theme=acheron] &',

  // modes
  lightMode: '[data-color-mode=light] &, &.light, .light &',
  darkMode: '[data-color-mode=dark] &, &.dark, .dark &',
  systemMode: '[data-color-mode=system] &, &.system, .system &',

  // states
  modalOpen: '&:is([data-modal-open=true])',
  screenReaderOnly: '&:is([data-screen-reader-only=true])',
  isOver: '&:is([data-over=true])',
  isDropped: '&:is([data-dropped=true])',
  isComplete: '&:is([data-complete=true])',
  invalid: '&:is(:invalid, [data-invalid], [aria-invalid])',
  userInvalid: '&:is(:user-invalid, [aria-invalid])',
  groupInvalid: '.group:is([data-invalid] &, [aria-invalid]) &',
  groupChecked: '.group:is([data-checked="true"] &, [aria-checked="true"]) &',

  // positions
  positionBottom: '&:is([data-position=bottom])',
  positionTop: '&:is([data-position=top])',
  positionLeft: '&:is([data-position=left])',
  positionRight: '&:is([data-position=right])',

  // elements
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
}
