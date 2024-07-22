import figma from '@figma/code-connect'
import { ManageProtection } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ManageProtection,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-146',

  {
    imports: ["import { ManageProtection } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ManageProtection size={props.size} />,
  },
)
