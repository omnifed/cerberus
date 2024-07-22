import figma from '@figma/code-connect'
import { WatsonHealthDna } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthDna,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-87',

  {
    imports: ["import { WatsonHealthDna } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthDna size={props.size} />,
  },
)
