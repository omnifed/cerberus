import figma from '@figma/code-connect'
import { FaceAdd } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FaceAdd,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9426-1670',

  {
    imports: ["import { FaceAdd } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FaceAdd size={props.size} />,
  },
)
