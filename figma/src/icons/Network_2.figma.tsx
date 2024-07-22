import figma from '@figma/code-connect'
import { Network_2 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Network_2,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1001',

  {
    imports: ["import { Network_2 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Network_2 size={props.size} />,
  },
)
