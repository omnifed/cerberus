import figma from '@figma/code-connect'
import { AlignBoxTopRight } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AlignBoxTopRight,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-14',

  {
    imports: ["import { AlignBoxTopRight } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AlignBoxTopRight size={props.size} />,
  },
)
