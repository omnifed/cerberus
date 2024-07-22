import figma from '@figma/code-connect'
import { AddAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AddAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9261-529',

  {
    imports: ["import { AddAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AddAlt size={props.size} />,
  },
)
