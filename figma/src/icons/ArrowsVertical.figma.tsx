import figma from '@figma/code-connect'
import { ArrowsVertical } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ArrowsVertical,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9601-2192',

  {
    imports: ["import { ArrowsVertical } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ArrowsVertical size={props.size} />,
  },
)
