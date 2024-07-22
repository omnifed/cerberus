import figma from '@figma/code-connect'
import { Transgender } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Transgender,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-23',

  {
    imports: ["import { Transgender } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Transgender size={props.size} />,
  },
)
