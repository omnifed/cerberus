import figma from '@figma/code-connect'
import { FlowStreamReference } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FlowStreamReference,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-926',

  {
    imports: ["import { FlowStreamReference } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FlowStreamReference size={props.size} />,
  },
)
