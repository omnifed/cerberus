import figma from '@figma/code-connect'
import { LogoRScript } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoRScript,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9384-55',

  {
    imports: ["import { LogoRScript } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoRScript size={props.size} />,
  },
)
