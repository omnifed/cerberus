import figma from '@figma/code-connect'
import { DataBase } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataBase,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-800',

  {
    imports: ["import { DataBase } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataBase size={props.size} />,
  },
)
