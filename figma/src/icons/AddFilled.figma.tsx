import figma from '@figma/code-connect'
import { AddFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AddFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9261-530',

  {
    imports: ["import { AddFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AddFilled size={props.size} />,
  },
)
