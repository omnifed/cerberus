import figma from '@figma/code-connect'
import { AlignBoxBottomLeft } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AlignBoxBottomLeft,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9472-30',

  {
    imports: ["import { AlignBoxBottomLeft } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AlignBoxBottomLeft size={props.size} />,
  },
)
