import figma from '@figma/code-connect'
import { Cicsplex } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Cicsplex,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-77',

  {
    imports: ["import { Cicsplex } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Cicsplex size={props.size} />,
  },
)
