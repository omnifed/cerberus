import figma from '@figma/code-connect'
import { AddComment } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AddComment,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9601-2187',

  {
    imports: ["import { AddComment } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AddComment size={props.size} />,
  },
)
