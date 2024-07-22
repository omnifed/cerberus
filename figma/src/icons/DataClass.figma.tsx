import figma from '@figma/code-connect'
import { DataClass } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataClass,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-839',

  {
    imports: ["import { DataClass } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataClass size={props.size} />,
  },
)
