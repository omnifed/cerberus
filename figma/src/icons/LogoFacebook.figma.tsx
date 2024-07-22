import figma from '@figma/code-connect'
import { LogoFacebook } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoFacebook,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9656-352',

  {
    imports: ["import { LogoFacebook } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoFacebook size={props.size} />,
  },
)
