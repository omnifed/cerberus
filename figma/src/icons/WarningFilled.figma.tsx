import figma from '@figma/code-connect'
import { WarningFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WarningFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-262',

  {
    imports: ["import { WarningFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WarningFilled size={props.size} />,
  },
)
