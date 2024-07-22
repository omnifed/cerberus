import figma from '@figma/code-connect'
import { Floorplan } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Floorplan,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-988',

  {
    imports: ["import { Floorplan } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Floorplan size={props.size} />,
  },
)
