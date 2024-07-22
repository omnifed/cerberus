import figma from '@figma/code-connect'
import { LogoVmware } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoVmware,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9384-58',

  {
    imports: ["import { LogoVmware } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoVmware size={props.size} />,
  },
)
