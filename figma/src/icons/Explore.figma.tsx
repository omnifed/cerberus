import figma from '@figma/code-connect'
import { Explore } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Explore,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-8',

  {
    imports: ["import { Explore } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Explore size={props.size} />,
  },
)
