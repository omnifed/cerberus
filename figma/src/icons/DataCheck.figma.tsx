import figma from '@figma/code-connect'
import { DataCheck } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataCheck,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-806',

  {
    imports: ["import { DataCheck } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataCheck size={props.size} />,
  },
)
