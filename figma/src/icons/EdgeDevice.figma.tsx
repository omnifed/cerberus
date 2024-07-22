import figma from '@figma/code-connect'
import { EdgeDevice } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  EdgeDevice,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-715',

  {
    imports: ["import { EdgeDevice } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <EdgeDevice size={props.size} />,
  },
)
