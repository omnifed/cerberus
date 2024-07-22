import figma from '@figma/code-connect'
import { RadioCombat } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RadioCombat,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-86',

  {
    imports: ["import { RadioCombat } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RadioCombat size={props.size} />,
  },
)
