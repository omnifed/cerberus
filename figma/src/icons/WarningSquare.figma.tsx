import figma from '@figma/code-connect'
import { WarningSquare } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WarningSquare,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-266',

  {
    imports: ["import { WarningSquare } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WarningSquare size={props.size} />,
  },
)
