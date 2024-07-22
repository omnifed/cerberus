import figma from '@figma/code-connect'
import { Milestone } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Milestone,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1102',

  {
    imports: ["import { Milestone } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Milestone size={props.size} />,
  },
)
