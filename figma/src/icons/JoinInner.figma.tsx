import figma from '@figma/code-connect'
import { JoinInner } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  JoinInner,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-965',

  {
    imports: ["import { JoinInner } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <JoinInner size={props.size} />,
  },
)
