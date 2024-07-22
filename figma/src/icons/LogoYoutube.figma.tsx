import figma from '@figma/code-connect'
import { LogoYoutube } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoYoutube,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9656-370',

  {
    imports: ["import { LogoYoutube } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoYoutube size={props.size} />,
  },
)
