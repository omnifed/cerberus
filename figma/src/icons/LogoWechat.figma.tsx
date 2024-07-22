import figma from '@figma/code-connect'
import { LogoWechat } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoWechat,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9656-367',

  {
    imports: ["import { LogoWechat } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoWechat size={props.size} />,
  },
)
