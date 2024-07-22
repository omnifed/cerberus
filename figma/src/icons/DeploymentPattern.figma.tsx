import figma from '@figma/code-connect'
import { DeploymentPattern } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DeploymentPattern,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-685',

  {
    imports: ["import { DeploymentPattern } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DeploymentPattern size={props.size} />,
  },
)
