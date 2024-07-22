import figma from '@figma/code-connect'
import { WarningAltFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WarningAltFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-259',

  {
    imports: ["import { WarningAltFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WarningAltFilled size={props.size} />,
  },
)
