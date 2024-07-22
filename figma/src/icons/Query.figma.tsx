import figma from '@figma/code-connect'
import { Query } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Query,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-165',

  {
    imports: ["import { Query } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Query size={props.size} />,
  },
)
