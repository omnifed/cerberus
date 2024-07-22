import figma from '@figma/code-connect'
import { Tank } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Tank,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-982',

  {
    imports: ["import { Tank } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Tank size={props.size} />,
  },
)
