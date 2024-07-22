import figma from '@figma/code-connect'
import { Report } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Report,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1053',

  {
    imports: ["import { Report } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Report size={props.size} />,
  },
)
