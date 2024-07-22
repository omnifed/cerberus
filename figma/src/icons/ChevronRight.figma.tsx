import figma from '@figma/code-connect'
import { ChevronRight } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChevronRight,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-3936',

  {
    imports: ["import { ChevronRight } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChevronRight size={props.size} />,
  },
)
