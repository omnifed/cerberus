import figma from '@figma/code-connect'
import { Home } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Home,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-4128',

  {
    imports: ["import { Home } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Home size={props.size} />,
  },
)
