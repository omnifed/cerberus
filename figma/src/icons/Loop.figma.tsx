import figma from '@figma/code-connect'
import { Loop } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Loop,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-142',

  {
    imports: ["import { Loop } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Loop size={props.size} />,
  },
)
