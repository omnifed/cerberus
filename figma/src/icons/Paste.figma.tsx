import figma from '@figma/code-connect'
import { Paste } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Paste,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1191',

  {
    imports: ["import { Paste } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Paste size={props.size} />,
  },
)
