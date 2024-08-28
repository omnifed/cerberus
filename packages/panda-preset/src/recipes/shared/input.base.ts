import { focusStates, formStates } from './states'

export const input = {
  border: '1px solid',
  borderColor: 'action.border.initial',
  color: 'page.text.initial',
  h: 'full',
  pxi: '4',
  rounded: 'sm',
  transitionProperty: 'border-color',
  transitionDuration: '200ms',
  transitionTimingFunction: 'ease-in-out',
  w: 'full',

  ...focusStates,
  ...formStates,
  _userInvalid: {
    borderColor: 'danger.border.initial',
  },
}
