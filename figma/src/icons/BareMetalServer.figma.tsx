import figma from '@figma/code-connect'
import { BareMetalServer } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BareMetalServer,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-26',

  {
    imports: ["import { BareMetalServer } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BareMetalServer size={props.size} />,
  },
)
