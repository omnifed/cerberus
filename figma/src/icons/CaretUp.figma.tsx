import figma from '@figma/code-connect'
import { CaretUp } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CaretUp,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-3435',

  {
    imports: ["import { CaretUp } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CaretUp size={props.size} />,
  },
)
