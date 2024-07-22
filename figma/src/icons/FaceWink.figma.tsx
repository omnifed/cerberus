import figma from '@figma/code-connect'
import { FaceWink } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FaceWink,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9426-1709',

  {
    imports: ["import { FaceWink } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FaceWink size={props.size} />,
  },
)
