import {
  createCerberusConfig,
  createCerberusPreset,
} from '@cerberus-design/panda-preset'
import type { Preset } from '@pandacss/dev'

export default createCerberusConfig({
  clean: true,

  presets: [
    createCerberusPreset({
      globalVars: {
        '--font-poppins': 'Poppins, sans-serif',
        '--font-recursive': 'Recursive, sans-serif',
      },
    } as unknown as Preset),
  ],

  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],

  jsxFramework: 'solid',
})
