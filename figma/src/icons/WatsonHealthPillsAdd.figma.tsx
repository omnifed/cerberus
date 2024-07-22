import figma from '@figma/code-connect'
import { WatsonHealthPillsAdd } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthPillsAdd,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-177',

  {
    imports: ["import { WatsonHealthPillsAdd } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthPillsAdd size={props.size} />,
  },
)
