import figma from '@figma/code-connect'
import { Smell } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Smell,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9632-9',

  {
    imports: ["import { Smell } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Smell size={props.size} />,
  },
)
