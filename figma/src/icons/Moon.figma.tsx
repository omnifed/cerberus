import figma from '@figma/code-connect'
import { Moon } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Moon,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-810',

  {
    imports: ["import { Moon } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Moon size={props.size} />,
  },
)
