import figma from '@figma/code-connect'
import { Laptop } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Laptop,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-23',

  {
    imports: ["import { Laptop } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Laptop size={props.size} />,
  },
)
