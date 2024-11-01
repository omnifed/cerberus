import { focusStates, formStates } from './states'

export const input = {
  appearance: 'none',
  bgColor: 'page.surface.initial',
  border: '1px solid',
  borderColor: 'action.border.100',
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
    bgColor: 'page.surface.100',
    borderColor: 'danger.border.initial',
  },
}

export const inputSizes = {
  sm: {
    root: {
      md: {
        h: '2rem',
      },
    },
    input: {
      fontSize: 'sm',
    },
  },
  md: {
    root: {
      md: {
        h: '2.5rem',
      },
    },
    input: {
      fontSize: 'sm',
    },
  },
  lg: {
    root: {
      h: '3rem',
    },
  },
}
