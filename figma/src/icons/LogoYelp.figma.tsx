import figma from '@figma/code-connect'
import { LogoYelp } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoYelp,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9656-369',

  {
    imports: ["import { LogoYelp } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoYelp size={props.size} />,
  },
)
