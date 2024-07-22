import figma from '@figma/code-connect'
import { IBMWatsonAssistant } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMWatsonAssistant,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-78',

  {
    imports: ["import { IBMWatsonAssistant } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMWatsonAssistant size={props.size} />,
  },
)
