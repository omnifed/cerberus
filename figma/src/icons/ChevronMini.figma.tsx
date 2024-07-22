import figma from '@figma/code-connect'
import { ChevronMini } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChevronMini,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-13',

  {
    imports: ["import { ChevronMini } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChevronMini size={props.size} />,
  },
)
