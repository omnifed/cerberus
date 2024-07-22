import figma from '@figma/code-connect'
import { PointOfPresence } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PointOfPresence,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-320',

  {
    imports: ["import { PointOfPresence } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PointOfPresence size={props.size} />,
  },
)
