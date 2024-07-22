import figma from '@figma/code-connect'
import { Watch } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Watch,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-135',

  {
    imports: ["import { Watch } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Watch size={props.size} />,
  },
)
