import figma from '@figma/code-connect'
import { CaretSortDown } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CaretSortDown,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9601-2260',

  {
    imports: ["import { CaretSortDown } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CaretSortDown size={props.size} />,
  },
)
