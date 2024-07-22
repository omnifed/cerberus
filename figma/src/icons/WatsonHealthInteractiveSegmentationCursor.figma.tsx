import figma from '@figma/code-connect'
import { WatsonHealthInteractiveSegmentationCursor } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthInteractiveSegmentationCursor,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-135',

  {
    imports: [
      "import { WatsonHealthInteractiveSegmentationCursor } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => (
      <WatsonHealthInteractiveSegmentationCursor size={props.size} />
    ),
  },
)
