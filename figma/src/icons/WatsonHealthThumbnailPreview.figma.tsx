import figma from '@figma/code-connect'
import { WatsonHealthThumbnailPreview } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthThumbnailPreview,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-285',

  {
    imports: ["import { WatsonHealthThumbnailPreview } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthThumbnailPreview size={props.size} />,
  },
)
