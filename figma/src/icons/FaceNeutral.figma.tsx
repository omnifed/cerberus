import figma from '@figma/code-connect'
import { FaceNeutral } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FaceNeutral,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9426-1691',

  {
    imports: ["import { FaceNeutral } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FaceNeutral size={props.size} />,
  },
)
