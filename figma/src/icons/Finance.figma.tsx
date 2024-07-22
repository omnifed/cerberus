import figma from '@figma/code-connect'
import { Finance } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Finance,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1039',

  {
    imports: ["import { Finance } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Finance size={props.size} />,
  },
)
