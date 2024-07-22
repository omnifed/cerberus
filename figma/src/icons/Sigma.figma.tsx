import figma from '@figma/code-connect'
import { Sigma } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Sigma,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-1044',

  {
    imports: ["import { Sigma } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Sigma size={props.size} />,
  },
)
