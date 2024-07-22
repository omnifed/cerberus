import figma from '@figma/code-connect'
import { InsertSyntax } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  InsertSyntax,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-23',

  {
    imports: ["import { InsertSyntax } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <InsertSyntax size={props.size} />,
  },
)
