import figma from '@figma/code-connect'
import { CircleFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CircleFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-764',

  {
    imports: ["import { CircleFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CircleFilled size={props.size} />,
  },
)
