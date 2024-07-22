import figma from '@figma/code-connect'
import { IBMCloudSecurityComplianceCenter } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudSecurityComplianceCenter,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1287',

  {
    imports: [
      "import { IBMCloudSecurityComplianceCenter } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudSecurityComplianceCenter size={props.size} />,
  },
)
