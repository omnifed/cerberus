import figma from '@figma/code-connect'
import { DeploymentUnitTechnicalExecution } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DeploymentUnitTechnicalExecution,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-134',

  {
    imports: [
      "import { DeploymentUnitTechnicalExecution } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DeploymentUnitTechnicalExecution size={props.size} />,
  },
)
