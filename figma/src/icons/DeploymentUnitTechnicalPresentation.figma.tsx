import figma from '@figma/code-connect'
import { DeploymentUnitTechnicalPresentation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DeploymentUnitTechnicalPresentation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-140',

  {
    imports: [
      "import { DeploymentUnitTechnicalPresentation } from '@cerberus/icons'",
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
      <DeploymentUnitTechnicalPresentation size={props.size} />
    ),
  },
)
