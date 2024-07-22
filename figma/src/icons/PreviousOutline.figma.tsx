import figma from '@figma/code-connect'
import { PreviousOutline } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PreviousOutline,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35151',

  {
    imports: ["import { PreviousOutline } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PreviousOutline size={props.size} />,
  },
)
