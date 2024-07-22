import figma from '@figma/code-connect'
import { WatsonHealthStudyNext } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthStudyNext,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-255',

  {
    imports: ["import { WatsonHealthStudyNext } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthStudyNext size={props.size} />,
  },
)
