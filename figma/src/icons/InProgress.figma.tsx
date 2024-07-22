import figma from '@figma/code-connect'
import { InProgress } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  InProgress,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-237',

  {
    imports: ["import { InProgress } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <InProgress size={props.size} />,
  },
)
