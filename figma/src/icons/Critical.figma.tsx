import figma from '@figma/code-connect'
import { Critical } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Critical,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-222',

  {
    imports: ["import { Critical } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Critical size={props.size} />,
  },
)
