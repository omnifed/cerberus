import figma from '@figma/code-connect'
import { CircleFill } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CircleFill,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-218',

  {
    imports: ["import { CircleFill } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CircleFill size={props.size} />,
  },
)
