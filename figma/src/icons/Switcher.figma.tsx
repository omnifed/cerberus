import figma from '@figma/code-connect'
import { Switcher } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Switcher,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-4173',

  {
    imports: ["import { Switcher } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Switcher size={props.size} />,
  },
)
