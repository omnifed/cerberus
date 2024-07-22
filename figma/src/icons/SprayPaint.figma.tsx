import figma from '@figma/code-connect'
import { SprayPaint } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SprayPaint,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-503',

  {
    imports: ["import { SprayPaint } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SprayPaint size={props.size} />,
  },
)
