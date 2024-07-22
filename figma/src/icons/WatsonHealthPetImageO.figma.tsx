import figma from '@figma/code-connect'
import { WatsonHealthPetImageO } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthPetImageO,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-171',

  {
    imports: ["import { WatsonHealthPetImageO } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthPetImageO size={props.size} />,
  },
)
