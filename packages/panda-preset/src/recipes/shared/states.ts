export const focusStates = {
  _focusVisible: {
    boxShadow: 'none',
    outline: '3px solid',
    outlineColor: 'action.border.focus',
    outlineOffset: '2px',
  },
}

export const formStates = {
  _disabled: {
    cursor: 'not-allowed',
    opacity: '0.5',
  },
  _readOnly: {
    '&:not(button)': {
      cursor: 'default',
    },
  },
  _autoComplete: {
    WebkitBoxShadow: '0 0 0px 1000px var(--colors-page-surface-initial) inset',
    WebkitTextFillColor: 'page.text.initial',
    caretColor: 'page.text.initial',
    transition: 'background-color 5000s ease-in-out 0s',
  },
}
