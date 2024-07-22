import figma from '@figma/code-connect'
import { SidePanelOpenFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SidePanelOpenFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35286',

  {
    imports: ["import { SidePanelOpenFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SidePanelOpenFilled size={props.size} />,
  },
)
