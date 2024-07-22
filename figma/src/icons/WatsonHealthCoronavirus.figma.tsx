import figma from '@figma/code-connect'
import { WatsonHealthCoronavirus } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthCoronavirus,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-69',

  {
    imports: ["import { WatsonHealthCoronavirus } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthCoronavirus size={props.size} />,
  },
)
