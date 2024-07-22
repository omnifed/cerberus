import figma from '@figma/code-connect'
import { Corner } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Corner,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-186',

  {
    imports: ["import { Corner } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Corner size={props.size} />,
  },
)
