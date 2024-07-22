import figma from '@figma/code-connect'
import { TouchInteraction } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TouchInteraction,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9632-17',

  {
    imports: ["import { TouchInteraction } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TouchInteraction size={props.size} />,
  },
)
