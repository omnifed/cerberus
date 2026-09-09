import { BasicDemo } from './basic.demo'
import { TypeDemo } from './type.demo'

export const DEMOS = {
  basic: {
    id: `cq.basic`,
    preview: <BasicDemo />,
  },
  type: {
    id: `cq.type`,
    preview: <TypeDemo />,
  },

  meta: `import { Cq } from "styled-system/jsx"`,

  configMeta: `export default createCerberusConfig({
    // ...
    theme: {
      extend: {
        containerNames: ['sidebar', 'content'],
        containerSizes: {
          xs: '40em',
          sm: '60em',
          md: '80em'
        }
      }
    }
  })`,

  componentMeta: `import { Box, Cq } from 'styled-system/jsx'

  export function UsageDemo() {
    return (
      <Cq name="sidebar">
        <Box
          fontSize={{
            base: 'lg',
            '@sidebar/sm': 'md',
          }}
        />
      </Cq>
    )
  }`,

  sizesMeta: `{
  xs: '320px',
  sm: '384px',
  md: '448px',
  lg: '512px',
  xl: '576px',
  '2xl': '672px',
  '3xl': '768px',
  '4xl': '896px',
  '5xl': '1024px',
  '6xl': '1152px',
  '7xl': '1280px',
  '8xl': '1440px'
}`,
}
