import figma from '@figma/code-connect'
import { Folders } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Folders,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1018',

  {
    imports: ["import { Folders } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Folders size={props.size} />,
  },
)
