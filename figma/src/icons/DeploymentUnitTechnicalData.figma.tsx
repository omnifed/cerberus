import figma from '@figma/code-connect'
import { DeploymentUnitTechnicalData } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DeploymentUnitTechnicalData,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-131',

  {
    imports: ["import { DeploymentUnitTechnicalData } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DeploymentUnitTechnicalData size={props.size} />,
  },
)
