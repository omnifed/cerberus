import figma from '@figma/code-connect'
import { DeploymentUnitTechnicalInstallation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DeploymentUnitTechnicalInstallation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-137',

  {
    imports: [
      "import { DeploymentUnitTechnicalInstallation } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => (
      <DeploymentUnitTechnicalInstallation size={props.size} />
    ),
  },
)
