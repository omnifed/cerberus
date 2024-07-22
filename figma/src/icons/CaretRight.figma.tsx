import figma from '@figma/code-connect'
import { CaretRight } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CaretRight,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-3434',

  {
    imports: ["import { CaretRight } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CaretRight size={props.size} />,
  },
)
