import figma from '@figma/code-connect'
import { WatsonHealthErase3D } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthErase3D,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-105',

  {
    imports: ["import { WatsonHealthErase3D } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthErase3D size={props.size} />,
  },
)
