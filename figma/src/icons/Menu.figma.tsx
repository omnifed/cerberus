import figma from '@figma/code-connect'
import { Menu } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Menu,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-4129',

  {
    imports: ["import { Menu } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Menu size={props.size} />,
  },
)
