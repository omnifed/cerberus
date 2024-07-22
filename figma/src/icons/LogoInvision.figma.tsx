import figma from '@figma/code-connect'
import { LogoInvision } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoInvision,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9384-22',

  {
    imports: ["import { LogoInvision } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoInvision size={props.size} />,
  },
)
