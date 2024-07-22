import figma from '@figma/code-connect'
import { LogoVue } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoVue,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9384-37',

  {
    imports: ["import { LogoVue } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoVue size={props.size} />,
  },
)
