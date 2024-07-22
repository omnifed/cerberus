import figma from '@figma/code-connect'
import { LogoKeybase } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoKeybase,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9384-43',

  {
    imports: ["import { LogoKeybase } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoKeybase size={props.size} />,
  },
)
