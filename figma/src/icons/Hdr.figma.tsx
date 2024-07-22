import figma from '@figma/code-connect'
import { Hdr } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Hdr,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1042',

  {
    imports: ["import { Hdr } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Hdr size={props.size} />,
  },
)
