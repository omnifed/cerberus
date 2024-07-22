import figma from '@figma/code-connect'
import { ZosSysplex } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ZosSysplex,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-107',

  {
    imports: ["import { ZosSysplex } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ZosSysplex size={props.size} />,
  },
)
