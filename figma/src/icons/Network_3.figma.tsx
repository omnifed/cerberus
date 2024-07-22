import figma from '@figma/code-connect'
import { Network_3 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Network_3,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1004',

  {
    imports: ["import { Network_3 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Network_3 size={props.size} />,
  },
)
