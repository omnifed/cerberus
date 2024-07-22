import figma from '@figma/code-connect'
import { LogoTumblr } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoTumblr,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9656-365',

  {
    imports: ["import { LogoTumblr } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoTumblr size={props.size} />,
  },
)
