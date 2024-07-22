import figma from '@figma/code-connect'
import { WarningAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WarningAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-258',

  {
    imports: ["import { WarningAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WarningAlt size={props.size} />,
  },
)
