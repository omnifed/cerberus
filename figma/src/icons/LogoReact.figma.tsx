import figma from '@figma/code-connect'
import { LogoReact } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoReact,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9384-28',

  {
    imports: ["import { LogoReact } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoReact size={props.size} />,
  },
)
