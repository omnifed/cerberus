import figma from '@figma/code-connect'
import { YAxis } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  YAxis,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-22',

  {
    imports: ["import { YAxis } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <YAxis size={props.size} />,
  },
)
