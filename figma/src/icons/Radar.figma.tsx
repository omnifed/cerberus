import figma from '@figma/code-connect'
import { Radar } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Radar,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-33',

  {
    imports: ["import { Radar } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Radar size={props.size} />,
  },
)
