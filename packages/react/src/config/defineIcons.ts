import { defaultIcons, type DefinedIcons } from './cerbIcons'

function _validateIconsProperties(icons: DefinedIcons) {
  if (!icons.invalid) {
    throw new Error(
      'The an invalid property must be defined in your custom icons library.',
    )
  }
}

export function defineIcons(icons: DefinedIcons): DefinedIcons {
  _validateIconsProperties(icons)
  $cerberusIcons = icons
  return $cerberusIcons
}

// Default icons

export let $cerberusIcons: DefinedIcons = defaultIcons
