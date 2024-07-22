import figma from '@figma/code-connect'
import { VerticalView } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VerticalView,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-150',

  {
    imports: ["import { VerticalView } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VerticalView size={props.size} />,
  },
)
