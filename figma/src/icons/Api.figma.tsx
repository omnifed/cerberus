import figma from '@figma/code-connect'
import { Api } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Api,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-8',

  {
    imports: ["import { Api } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Api size={props.size} />,
  },
)
