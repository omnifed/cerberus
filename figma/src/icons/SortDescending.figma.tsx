import figma from '@figma/code-connect'
import { SortDescending } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SortDescending,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-461',

  {
    imports: ["import { SortDescending } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SortDescending size={props.size} />,
  },
)
