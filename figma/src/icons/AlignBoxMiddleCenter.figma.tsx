import figma from '@figma/code-connect'
import { AlignBoxMiddleCenter } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AlignBoxMiddleCenter,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9472-35',

  {
    imports: ["import { AlignBoxMiddleCenter } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AlignBoxMiddleCenter size={props.size} />,
  },
)
