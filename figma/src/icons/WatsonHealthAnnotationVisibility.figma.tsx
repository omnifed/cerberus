import figma from '@figma/code-connect'
import { WatsonHealthAnnotationVisibility } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthAnnotationVisibility,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-23',

  {
    imports: [
      "import { WatsonHealthAnnotationVisibility } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthAnnotationVisibility size={props.size} />,
  },
)
