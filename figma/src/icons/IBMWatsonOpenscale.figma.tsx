import figma from '@figma/code-connect'
import { IBMWatsonOpenscale } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMWatsonOpenscale,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-103',

  {
    imports: ["import { IBMWatsonOpenscale } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMWatsonOpenscale size={props.size} />,
  },
)
