import figma from '@figma/code-connect'
import { DataError } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataError,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-812',

  {
    imports: ["import { DataError } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataError size={props.size} />,
  },
)
