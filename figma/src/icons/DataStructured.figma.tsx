import figma from '@figma/code-connect'
import { DataStructured } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataStructured,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-824',

  {
    imports: ["import { DataStructured } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataStructured size={props.size} />,
  },
)
