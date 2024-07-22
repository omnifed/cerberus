import figma from '@figma/code-connect'
import { Scales } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Scales,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-42',

  {
    imports: ["import { Scales } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Scales size={props.size} />,
  },
)
