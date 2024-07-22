import figma from '@figma/code-connect'
import { NextOutline } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NextOutline,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35091',

  {
    imports: ["import { NextOutline } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NextOutline size={props.size} />,
  },
)
