import figma from '@figma/code-connect'
import { VisualRecognition } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VisualRecognition,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1176',

  {
    imports: ["import { VisualRecognition } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VisualRecognition size={props.size} />,
  },
)
