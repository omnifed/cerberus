import figma from '@figma/code-connect'
import { FlowStream } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FlowStream,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-923',

  {
    imports: ["import { FlowStream } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FlowStream size={props.size} />,
  },
)
