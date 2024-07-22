import figma from '@figma/code-connect'
import { LogoSnapchat } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoSnapchat,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9656-364',

  {
    imports: ["import { LogoSnapchat } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoSnapchat size={props.size} />,
  },
)
