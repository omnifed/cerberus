import figma from '@figma/code-connect'
import { Headset } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Headset,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-5',

  {
    imports: ["import { Headset } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Headset size={props.size} />,
  },
)
