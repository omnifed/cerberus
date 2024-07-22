import figma from '@figma/code-connect'
import { Camera } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Camera,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-14',

  {
    imports: ["import { Camera } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Camera size={props.size} />,
  },
)
