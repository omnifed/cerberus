import figma from '@figma/code-connect'
import { LogoLivestream } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoLivestream,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9656-358',

  {
    imports: ["import { LogoLivestream } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoLivestream size={props.size} />,
  },
)
