import figma from '@figma/code-connect'
import { WarningHexFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WarningHexFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-264',

  {
    imports: ["import { WarningHexFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WarningHexFilled size={props.size} />,
  },
)
