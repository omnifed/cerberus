import figma from '@figma/code-connect'
import { FaceActivated } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FaceActivated,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9426-1661',

  {
    imports: ["import { FaceActivated } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FaceActivated size={props.size} />,
  },
)
