import figma from '@figma/code-connect'
import { NextFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NextFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35088',

  {
    imports: ["import { NextFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NextFilled size={props.size} />,
  },
)
