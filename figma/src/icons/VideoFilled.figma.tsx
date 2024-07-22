import figma from '@figma/code-connect'
import { VideoFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VideoFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9603-73',

  {
    imports: ["import { VideoFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VideoFilled size={props.size} />,
  },
)
