export const conditions = {
  // themes
  cerberusTheme: '[data-theme=cerberus] &',

  // modes
  lightMode: '[data-color-mode=light] &, &.light, .light &',
  darkMode: '[data-color-mode=dark] &, &.dark, .dark &',

  // states
  modalOpen: '&:is([data-modal-open=true])',
  screenReaderOnly: '&:is([data-screen-reader-only=true])',
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

  // roles
  admin: '&:is([data-role=admin])',
  student: '&:is([data-role=student])',
  user: '&:is([data-role=user])',

  // highlights
  highlight: '&:is(::selection)',
  spellingError: '&:is(::spelling-error)',
  grammarError: '&:is(::grammar-error)',

  // palettes
  neutralPalette: '&:is([data-palette=neutral])',
  actionPalette: '&:is([data-palette=action])',
  infoPalette: '&:is([data-palette=info])',
  successPalette: '&:is([data-palette=success])',
  warningPalette: '&:is([data-palette=warning])',
  dangerPalette: '&:is([data-palette=danger])',
}
