import figma from '@figma/code-connect'
import { Apps } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Apps,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9261-531',

  {
    imports: ["import { Apps } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Apps size={props.size} />,
  },
)
