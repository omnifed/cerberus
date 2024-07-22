import figma from '@figma/code-connect'
import { Event } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Event,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9619-937',

  {
    imports: ["import { Event } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Event size={props.size} />,
  },
)
