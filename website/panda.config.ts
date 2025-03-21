import {
  createCerberusConfig,
  createCerberusPreset,
} from '@cerberus-design/panda-preset'

export default createCerberusConfig({
  clean: true,

  presets: [
    createCerberusPreset({
      sansFont: 'Poppins, sans-serif',
      monoFont: 'Recursive, sans-serif',
    }),
  ],

  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],

  jsxFramework: 'solid',
})
