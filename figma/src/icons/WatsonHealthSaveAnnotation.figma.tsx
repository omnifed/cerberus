import figma from '@figma/code-connect'
import { WatsonHealthSaveAnnotation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthSaveAnnotation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-204',

  {
    imports: ["import { WatsonHealthSaveAnnotation } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthSaveAnnotation size={props.size} />,
  },
)
