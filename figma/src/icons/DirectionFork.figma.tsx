import figma from '@figma/code-connect'
import { DirectionFork } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DirectionFork,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1849',

  {
    imports: ["import { DirectionFork } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DirectionFork size={props.size} />,
  },
)
