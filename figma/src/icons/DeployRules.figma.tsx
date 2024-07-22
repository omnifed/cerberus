import figma from '@figma/code-connect'
import { DeployRules } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DeployRules,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-1127',

  {
    imports: ["import { DeployRules } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DeployRules size={props.size} />,
  },
)
