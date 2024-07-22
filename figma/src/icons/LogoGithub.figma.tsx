import figma from '@figma/code-connect'
import { LogoGithub } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoGithub,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9656-354',

  {
    imports: ["import { LogoGithub } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoGithub size={props.size} />,
  },
)
