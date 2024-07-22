import figma from '@figma/code-connect'
import { ConditionPoint } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ConditionPoint,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-220',

  {
    imports: ["import { ConditionPoint } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ConditionPoint size={props.size} />,
  },
)
