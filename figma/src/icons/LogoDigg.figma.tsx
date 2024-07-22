import figma from '@figma/code-connect'
import { LogoDigg } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoDigg,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9656-350',

  {
    imports: ["import { LogoDigg } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoDigg size={props.size} />,
  },
)
