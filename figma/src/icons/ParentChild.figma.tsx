import figma from '@figma/code-connect'
import { ParentChild } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ParentChild,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1028',

  {
    imports: ["import { ParentChild } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ParentChild size={props.size} />,
  },
)
