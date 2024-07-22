import figma from '@figma/code-connect'
import { OverflowMenuVertical } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  OverflowMenuVertical,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-4167',

  {
    imports: ["import { OverflowMenuVertical } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <OverflowMenuVertical size={props.size} />,
  },
)
