import figma from '@figma/code-connect'
import { LogoLinkedin } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoLinkedin,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9656-357',

  {
    imports: ["import { LogoLinkedin } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoLinkedin size={props.size} />,
  },
)
