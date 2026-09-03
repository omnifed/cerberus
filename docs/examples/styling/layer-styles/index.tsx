import { BasicDemo } from './basic.demo'
import layerStylesMeta from 'styled-system/specs/layer-styles.json'

export const DEMOS = {
  basic: BasicDemo,

  usingMeta: layerStylesMeta.data[0].jsxExamples[0],
  useFunctionMeta: layerStylesMeta.data[0].functionExamples[0],
}
