import figma from '@figma/code-connect'
import { TrainProfile } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TrainProfile,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-949',

  {
    imports: ["import { TrainProfile } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TrainProfile size={props.size} />,
  },
)
