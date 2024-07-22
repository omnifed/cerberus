import figma from '@figma/code-connect'
import { IntrusionPrevention } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IntrusionPrevention,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-251',

  {
    imports: ["import { IntrusionPrevention } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IntrusionPrevention size={props.size} />,
  },
)
