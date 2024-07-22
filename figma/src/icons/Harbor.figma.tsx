import figma from '@figma/code-connect'
import { Harbor } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Harbor,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1175',

  {
    imports: ["import { Harbor } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Harbor size={props.size} />,
  },
)
