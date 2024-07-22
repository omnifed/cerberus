import figma from '@figma/code-connect'
import { ResetAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ResetAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-177',

  {
    imports: ["import { ResetAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ResetAlt size={props.size} />,
  },
)
