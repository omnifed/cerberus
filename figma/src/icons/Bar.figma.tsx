import figma from '@figma/code-connect'
import { Bar } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Bar,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-3237',

  {
    imports: ["import { Bar } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Bar size={props.size} />,
  },
)
