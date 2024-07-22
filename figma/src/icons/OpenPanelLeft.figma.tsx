import figma from '@figma/code-connect'
import { OpenPanelLeft } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  OpenPanelLeft,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35109',

  {
    imports: ["import { OpenPanelLeft } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <OpenPanelLeft size={props.size} />,
  },
)
