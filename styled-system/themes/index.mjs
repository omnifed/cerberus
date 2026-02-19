export const getTheme = (themeName) =>
  import(`./theme-${themeName}.json`).then((m) => m.default)

export function injectTheme(el, theme) {
  const doc = el.ownerDocument || document
  let sheet = doc.getElementById(theme.id)

  if (!sheet) {
    sheet = doc.createElement('style')
    sheet.setAttribute('type', 'text/css')
    sheet.setAttribute('id', theme.id)
  }

  const head = doc.head || doc.getElementsByTagName('head')[0]
  if (!head) {
    throw new Error('No head found in doc')
  }

  el.dataset.pandaTheme = theme.name

  head.appendChild(sheet)
  sheet.innerHTML = theme.css

  return sheet
}
