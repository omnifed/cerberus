import figma from '@figma/code-connect'
import { DeploymentUnitExecution } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DeploymentUnitExecution,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-122',

  {
    imports: ["import { DeploymentUnitExecution } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DeploymentUnitExecution size={props.size} />,
  },
)
