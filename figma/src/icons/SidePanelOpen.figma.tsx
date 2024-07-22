import figma from '@figma/code-connect'
import { SidePanelOpen } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SidePanelOpen,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35289',

  {
    imports: ["import { SidePanelOpen } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SidePanelOpen size={props.size} />,
  },
)
