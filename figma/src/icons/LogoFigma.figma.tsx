import figma from '@figma/code-connect'
import { LogoFigma } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoFigma,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9384-19',

  {
    imports: ["import { LogoFigma } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoFigma size={props.size} />,
  },
)
