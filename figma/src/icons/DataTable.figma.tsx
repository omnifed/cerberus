import figma from '@figma/code-connect'
import { DataTable } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataTable,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-869',

  {
    imports: ["import { DataTable } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataTable size={props.size} />,
  },
)
