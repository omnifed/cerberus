import figma from '@figma/code-connect'
import { FirewallClassic } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FirewallClassic,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-158',

  {
    imports: ["import { FirewallClassic } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FirewallClassic size={props.size} />,
  },
)
