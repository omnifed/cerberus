import figma from '@figma/code-connect'
import { RuleCancelled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RuleCancelled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1236',

  {
    imports: ["import { RuleCancelled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RuleCancelled size={props.size} />,
  },
)
