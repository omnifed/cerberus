import figma from '@figma/code-connect'
import { LogoVmwareAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoVmwareAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9384-67',

  {
    imports: ["import { LogoVmwareAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoVmwareAlt size={props.size} />,
  },
)
