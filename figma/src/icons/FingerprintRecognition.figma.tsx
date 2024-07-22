import figma from '@figma/code-connect'
import { FingerprintRecognition } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FingerprintRecognition,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-739',

  {
    imports: ["import { FingerprintRecognition } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FingerprintRecognition size={props.size} />,
  },
)
