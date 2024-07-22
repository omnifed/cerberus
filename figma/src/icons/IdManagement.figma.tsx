import figma from '@figma/code-connect'
import { IdManagement } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IdManagement,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-209',

  {
    imports: ["import { IdManagement } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IdManagement size={props.size} />,
  },
)
