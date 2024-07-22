import figma from '@figma/code-connect'
import { LogoSvelte } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoSvelte,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9384-34',

  {
    imports: ["import { LogoSvelte } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoSvelte size={props.size} />,
  },
)
