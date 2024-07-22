import figma from '@figma/code-connect'
import { HardwareSecurityModule } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  HardwareSecurityModule,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-203',

  {
    imports: ["import { HardwareSecurityModule } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <HardwareSecurityModule size={props.size} />,
  },
)
