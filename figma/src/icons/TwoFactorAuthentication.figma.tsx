import figma from '@figma/code-connect'
import { TwoFactorAuthentication } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TwoFactorAuthentication,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-375',

  {
    imports: ["import { TwoFactorAuthentication } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TwoFactorAuthentication size={props.size} />,
  },
)
