import figma from '@figma/code-connect'
import { H } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  H,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9626-680',

  {
    imports: ["import { H } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <H size={props.size} />,
  },
)
