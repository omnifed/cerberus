import figma from '@figma/code-connect'
import { ExecutableProgram } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ExecutableProgram,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-83',

  {
    imports: ["import { ExecutableProgram } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ExecutableProgram size={props.size} />,
  },
)
