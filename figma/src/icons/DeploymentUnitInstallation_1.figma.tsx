import figma from '@figma/code-connect'
import { DeploymentUnitInstallation_1 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DeploymentUnitInstallation_1,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-125',

  {
    imports: ["import { DeploymentUnitInstallation_1 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DeploymentUnitInstallation_1 size={props.size} />,
  },
)
