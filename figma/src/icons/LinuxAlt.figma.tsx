import figma from '@figma/code-connect'
import { LinuxAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LinuxAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-980',

  {
    imports: ["import { LinuxAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LinuxAlt size={props.size} />,
  },
)
