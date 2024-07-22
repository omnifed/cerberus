import figma from '@figma/code-connect'
import { Tsv } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Tsv,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1321',

  {
    imports: ["import { Tsv } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Tsv size={props.size} />,
  },
)
