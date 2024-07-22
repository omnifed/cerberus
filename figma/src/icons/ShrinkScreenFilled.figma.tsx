import figma from '@figma/code-connect'
import { ShrinkScreenFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ShrinkScreenFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35190',

  {
    imports: ["import { ShrinkScreenFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ShrinkScreenFilled size={props.size} />,
  },
)
