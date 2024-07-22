import figma from '@figma/code-connect'
import { SidePanelClose } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SidePanelClose,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35283',

  {
    imports: ["import { SidePanelClose } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SidePanelClose size={props.size} />,
  },
)
