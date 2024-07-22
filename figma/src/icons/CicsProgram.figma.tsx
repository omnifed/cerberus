import figma from '@figma/code-connect'
import { CicsProgram } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CicsProgram,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-59',

  {
    imports: ["import { CicsProgram } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CicsProgram size={props.size} />,
  },
)
