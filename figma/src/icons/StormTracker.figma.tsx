import figma from '@figma/code-connect'
import { StormTracker } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  StormTracker,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-572',

  {
    imports: ["import { StormTracker } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <StormTracker size={props.size} />,
  },
)
