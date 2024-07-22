import figma from '@figma/code-connect'
import { DataFormat } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataFormat,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-815',

  {
    imports: ["import { DataFormat } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataFormat size={props.size} />,
  },
)
