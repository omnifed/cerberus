import figma from '@figma/code-connect'
import { ChevronLeft } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChevronLeft,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-3449',

  {
    imports: ["import { ChevronLeft } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChevronLeft size={props.size} />,
  },
)
