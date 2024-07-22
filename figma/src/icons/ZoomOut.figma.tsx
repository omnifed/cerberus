import figma from '@figma/code-connect'
import { ZoomOut } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ZoomOut,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9261-855',

  {
    imports: ["import { ZoomOut } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ZoomOut size={props.size} />,
  },
)
