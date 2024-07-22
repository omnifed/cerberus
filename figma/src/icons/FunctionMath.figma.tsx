import figma from '@figma/code-connect'
import { FunctionMath } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FunctionMath,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-17',

  {
    imports: ["import { FunctionMath } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FunctionMath size={props.size} />,
  },
)
