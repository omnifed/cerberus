import figma from '@figma/code-connect'
import { Arrival } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Arrival,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-3243',

  {
    imports: ["import { Arrival } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Arrival size={props.size} />,
  },
)
