import figma from '@figma/code-connect'
import { AlarmAdd } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AlarmAdd,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9619-959',

  {
    imports: ["import { AlarmAdd } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AlarmAdd size={props.size} />,
  },
)
