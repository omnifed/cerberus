import figma from '@figma/code-connect'
import { GuiManagement } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  GuiManagement,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-200',

  {
    imports: ["import { GuiManagement } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <GuiManagement size={props.size} />,
  },
)
