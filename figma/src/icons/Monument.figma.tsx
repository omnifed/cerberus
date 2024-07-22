import figma from '@figma/code-connect'
import { Monument } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Monument,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1096',

  {
    imports: ["import { Monument } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Monument size={props.size} />,
  },
)
