import figma from '@figma/code-connect'
import { SubflowLocal } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SubflowLocal,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1107',

  {
    imports: ["import { SubflowLocal } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SubflowLocal size={props.size} />,
  },
)
