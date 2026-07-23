export const PAGE = 'page'
export const ACTION = 'action'
export const SECONDARY_ACTION = 'secondaryAction'
export const INFO = 'info'
export const SUCCESS = 'success'
export const WARNING = 'warning'
export const DANGER = 'danger'
export const DATA_VIZ = 'dataViz'

export const action = {
  colorPalette: ACTION,
}

export const secondaryAction = {
  colorPalette: SECONDARY_ACTION,
}

export const page = {
  colorPalette: PAGE,
}

export const info = {
  colorPalette: INFO,
}

export const success = {
  colorPalette: SUCCESS,
}

export const warning = {
  colorPalette: WARNING,
}

export const danger = {
  colorPalette: DANGER,
}

export const dataViz = {
  colorPalette: DATA_VIZ,
}

export const allPalettes = {
  action,
  secondaryAction,
  page,
  info,
  success,
  warning,
  danger,
}

export const allSlotPalettes: Record<
  string,
  { root: (typeof allPalettes)[keyof typeof allPalettes] }
> = Object.entries(allPalettes).reduce((prev, [key, val]) => {
  return {
    ...prev,
    [key]: {
      root: val,
    },
  }
}, {})

export const noPageSlotPalettes: Record<
  string,
  { root: (typeof allPalettes)[keyof typeof allPalettes] }
> = Object.entries(allPalettes).reduce((prev, [key, val]) => {
  if (key === PAGE || key === SECONDARY_ACTION) return prev
  return {
    ...prev,
    [key]: {
      root: val,
    },
  }
}, {})

export const actionPalettes = {
  action,
  secondaryAction,
}

export const nonActionPalettes = {
  page,
  info,
  success,
  warning,
  danger,
}

export const statePalettes = {
  info,
  success,
  warning,
  danger,
}
