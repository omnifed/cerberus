import { BasicDemo } from './basic.demo'
import layerStylesMeta from 'styled-system/specs/layer-styles.json'

export const DEMOS = {
  basic: BasicDemo,

  definingMeta: `import { defineLayerStyles } from '@chakra-ui/react'

  const layerStyles = defineLayerStyles({
    container: {
      description: 'container styles',
      value: {
        background: 'gray.50',
        border: '2px solid',
        borderColor: 'gray.500',
      },
    },
  })`,
  updatingMeta: `// theme.ts

  import { createSystem, defineConfig } from '@chakra-ui/react'
  import { layerStyles } from './layer-styles'

  const config = defineConfig({
    theme: {
      layerStyles,
    },
  })

  export default createSystem(defaultConfig, config)`,
  usingMeta: layerStylesMeta.data[0].jsxExamples[0],
  useFunctionMeta: layerStylesMeta.data[0].functionExamples[0],
}
