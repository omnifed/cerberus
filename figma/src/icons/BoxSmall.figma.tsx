import figma from '@figma/code-connect'
import { BoxSmall } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BoxSmall,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-50',

  {
    imports: ["import { BoxSmall } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BoxSmall size={props.size} />,
  },
)
