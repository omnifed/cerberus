import figma from '@figma/code-connect'
import { Touch1Down } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Touch1Down,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9632-13',

  {
    imports: ["import { Touch1Down } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Touch1Down size={props.size} />,
  },
)
