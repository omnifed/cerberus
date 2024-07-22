import figma from '@figma/code-connect'
import { BareMetalServer_02 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BareMetalServer_02,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-32',

  {
    imports: ["import { BareMetalServer_02 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BareMetalServer_02 size={props.size} />,
  },
)
