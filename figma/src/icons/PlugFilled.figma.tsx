import figma from '@figma/code-connect'
import { PlugFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PlugFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-74',

  {
    imports: ["import { PlugFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PlugFilled size={props.size} />,
  },
)
