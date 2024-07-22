import figma from '@figma/code-connect'
import { ArrowsHorizontal } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ArrowsHorizontal,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9601-2191',

  {
    imports: ["import { ArrowsHorizontal } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ArrowsHorizontal size={props.size} />,
  },
)
