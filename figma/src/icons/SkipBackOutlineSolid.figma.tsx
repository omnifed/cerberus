import figma from '@figma/code-connect'
import { SkipBackOutlineSolid } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SkipBackOutlineSolid,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35205',

  {
    imports: ["import { SkipBackOutlineSolid } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SkipBackOutlineSolid size={props.size} />,
  },
)
