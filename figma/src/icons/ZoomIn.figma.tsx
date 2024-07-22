import figma from '@figma/code-connect'
import { ZoomIn } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ZoomIn,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9261-857',

  {
    imports: ["import { ZoomIn } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ZoomIn size={props.size} />,
  },
)
