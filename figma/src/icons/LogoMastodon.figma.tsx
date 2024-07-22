import figma from '@figma/code-connect'
import { LogoMastodon } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoMastodon,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9656-371',

  {
    imports: ["import { LogoMastodon } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoMastodon size={props.size} />,
  },
)
