import figma from '@figma/code-connect'
import { DataSet } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataSet,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-821',

  {
    imports: ["import { DataSet } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataSet size={props.size} />,
  },
)
