import figma from '@figma/code-connect'
import { LogoSketch } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoSketch,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9384-31',

  {
    imports: ["import { LogoSketch } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoSketch size={props.size} />,
  },
)
