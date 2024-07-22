import figma from '@figma/code-connect'
import { LogoAnsibleCommunity } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoAnsibleCommunity,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9384-61',

  {
    imports: ["import { LogoAnsibleCommunity } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoAnsibleCommunity size={props.size} />,
  },
)
