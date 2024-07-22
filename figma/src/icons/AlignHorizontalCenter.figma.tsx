import figma from '@figma/code-connect'
import { AlignHorizontalCenter } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AlignHorizontalCenter,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9472-9',

  {
    imports: ["import { AlignHorizontalCenter } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AlignHorizontalCenter size={props.size} />,
  },
)
