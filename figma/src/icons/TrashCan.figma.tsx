import figma from '@figma/code-connect'
import { TrashCan } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TrashCan,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-53',

  {
    imports: ["import { TrashCan } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TrashCan size={props.size} />,
  },
)
