import figma from '@figma/code-connect'
import { Hospital } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Hospital,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1166',

  {
    imports: ["import { Hospital } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Hospital size={props.size} />,
  },
)
