import figma from '@figma/code-connect'
import { Headphones } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Headphones,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-2',

  {
    imports: ["import { Headphones } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Headphones size={props.size} />,
  },
)
