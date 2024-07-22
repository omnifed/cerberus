import figma from '@figma/code-connect'
import { SkipForwardOutlineSolid } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SkipForwardOutlineSolid,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35223',

  {
    imports: ["import { SkipForwardOutlineSolid } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SkipForwardOutlineSolid size={props.size} />,
  },
)
