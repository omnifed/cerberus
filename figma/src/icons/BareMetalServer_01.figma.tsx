import figma from '@figma/code-connect'
import { BareMetalServer_01 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BareMetalServer_01,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-29',

  {
    imports: ["import { BareMetalServer_01 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BareMetalServer_01 size={props.size} />,
  },
)
