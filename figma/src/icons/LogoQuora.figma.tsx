import figma from '@figma/code-connect'
import { LogoQuora } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoQuora,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9656-361',

  {
    imports: ["import { LogoQuora } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoQuora size={props.size} />,
  },
)
