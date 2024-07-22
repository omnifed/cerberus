import figma from '@figma/code-connect'
import { ZoomReset } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ZoomReset,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9261-853',

  {
    imports: ["import { ZoomReset } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ZoomReset size={props.size} />,
  },
)
