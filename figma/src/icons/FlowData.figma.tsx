import figma from '@figma/code-connect'
import { FlowData } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FlowData,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-917',

  {
    imports: ["import { FlowData } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FlowData size={props.size} />,
  },
)
