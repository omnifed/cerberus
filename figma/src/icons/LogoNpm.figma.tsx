import figma from '@figma/code-connect'
import { LogoNpm } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoNpm,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9384-25',

  {
    imports: ["import { LogoNpm } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoNpm size={props.size} />,
  },
)
