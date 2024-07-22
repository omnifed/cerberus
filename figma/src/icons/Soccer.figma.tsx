import figma from '@figma/code-connect'
import { Soccer } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Soccer,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1119',

  {
    imports: ["import { Soccer } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Soccer size={props.size} />,
  },
)
