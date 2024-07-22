import figma from '@figma/code-connect'
import { Snooze } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Snooze,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9619-922',

  {
    imports: ["import { Snooze } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Snooze size={props.size} />,
  },
)
