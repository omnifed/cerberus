import figma from '@figma/code-connect'
import { AlignBoxTopLeft } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AlignBoxTopLeft,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-11',

  {
    imports: ["import { AlignBoxTopLeft } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AlignBoxTopLeft size={props.size} />,
  },
)
