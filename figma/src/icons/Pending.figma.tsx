import figma from '@figma/code-connect'
import { Pending } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Pending,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-250',

  {
    imports: ["import { Pending } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Pending size={props.size} />,
  },
)
