import figma from '@figma/code-connect'
import { SAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9626-688',

  {
    imports: ["import { SAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SAlt size={props.size} />,
  },
)
