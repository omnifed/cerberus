import figma from '@figma/code-connect'
import { DeploymentPolicy } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DeploymentPolicy,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-688',

  {
    imports: ["import { DeploymentPolicy } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DeploymentPolicy size={props.size} />,
  },
)
