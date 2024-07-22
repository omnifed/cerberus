import figma from '@figma/code-connect'
import { Filter } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Filter,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-10',

  {
    imports: ["import { Filter } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Filter size={props.size} />,
  },
)
