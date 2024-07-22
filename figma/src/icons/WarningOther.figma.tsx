import figma from '@figma/code-connect'
import { WarningOther } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WarningOther,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-265',

  {
    imports: ["import { WarningOther } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WarningOther size={props.size} />,
  },
)
