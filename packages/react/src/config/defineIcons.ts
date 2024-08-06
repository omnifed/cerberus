import { defaultIcons, type DefinedIcons } from './cerbIcons'

function _validateIconsProperties(icons: DefinedIcons) {
  if (!icons.invalid) {
    throw new Error(
      'The an invalid property must be defined in your custom icons library.',
    )
  }
}

export function defineIcons(icons: DefinedIcons): Required<DefinedIcons> {
  _validateIconsProperties(icons)
  $cerberusIcons = {
    ...defaultIcons,
    ...icons,
  } as Required<DefinedIcons>
  return $cerberusIcons
}

// Default icons

export let $cerberusIcons = defaultIcons as Required<DefinedIcons>
