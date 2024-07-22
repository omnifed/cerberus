import figma from '@figma/code-connect'
import { CloseFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CloseFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-4112',

  {
    imports: ["import { CloseFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CloseFilled size={props.size} />,
  },
)
