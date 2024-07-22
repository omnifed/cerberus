import figma from '@figma/code-connect'
import { Ppt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Ppt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1212',

  {
    imports: ["import { Ppt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Ppt size={props.size} />,
  },
)
