import figma from '@figma/code-connect'
import { Compare } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Compare,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-1120',

  {
    imports: ["import { Compare } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Compare size={props.size} />,
  },
)
