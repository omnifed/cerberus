import figma from '@figma/code-connect'
import { CicsDb2Connection } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CicsDb2Connection,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-56',

  {
    imports: ["import { CicsDb2Connection } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CicsDb2Connection size={props.size} />,
  },
)
