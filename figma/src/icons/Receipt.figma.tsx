import figma from '@figma/code-connect'
import { Receipt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Receipt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1084',

  {
    imports: ["import { Receipt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Receipt size={props.size} />,
  },
)
