import figma from '@figma/code-connect'
import { TAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9626-690',

  {
    imports: ["import { TAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TAlt size={props.size} />,
  },
)
