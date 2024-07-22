import figma from '@figma/code-connect'
import { DeskAdjustable } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DeskAdjustable,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-691',

  {
    imports: ["import { DeskAdjustable } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DeskAdjustable size={props.size} />,
  },
)
