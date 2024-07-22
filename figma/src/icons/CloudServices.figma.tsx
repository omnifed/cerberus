import figma from '@figma/code-connect'
import { CloudServices } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CloudServices,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-89',

  {
    imports: ["import { CloudServices } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CloudServices size={props.size} />,
  },
)
