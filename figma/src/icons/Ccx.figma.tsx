import figma from '@figma/code-connect'
import { Ccx } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Ccx,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9626-672',

  {
    imports: ["import { Ccx } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Ccx size={props.size} />,
  },
)
