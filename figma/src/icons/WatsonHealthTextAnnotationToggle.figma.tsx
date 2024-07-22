import figma from '@figma/code-connect'
import { WatsonHealthTextAnnotationToggle } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthTextAnnotationToggle,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-279',

  {
    imports: [
      "import { WatsonHealthTextAnnotationToggle } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthTextAnnotationToggle size={props.size} />,
  },
)
