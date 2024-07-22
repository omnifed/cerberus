import figma from '@figma/code-connect'
import { Sight } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Sight,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-20',

  {
    imports: ["import { Sight } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Sight size={props.size} />,
  },
)
