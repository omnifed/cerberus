import figma from '@figma/code-connect'
import { WarningHex } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WarningHex,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-263',

  {
    imports: ["import { WarningHex } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WarningHex size={props.size} />,
  },
)
