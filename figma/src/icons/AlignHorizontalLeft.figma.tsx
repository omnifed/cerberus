import figma from '@figma/code-connect'
import { AlignHorizontalLeft } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AlignHorizontalLeft,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9472-12',

  {
    imports: ["import { AlignHorizontalLeft } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AlignHorizontalLeft size={props.size} />,
  },
)
