import figma from '@figma/code-connect'
import { PenFountain } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PenFountain,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-329',

  {
    imports: ["import { PenFountain } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PenFountain size={props.size} />,
  },
)
