import figma from '@figma/code-connect'
import { Kubernetes } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Kubernetes,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-254',

  {
    imports: ["import { Kubernetes } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Kubernetes size={props.size} />,
  },
)
