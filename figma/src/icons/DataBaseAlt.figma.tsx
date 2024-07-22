import figma from '@figma/code-connect'
import { DataBaseAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataBaseAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-803',

  {
    imports: ["import { DataBaseAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataBaseAlt size={props.size} />,
  },
)
