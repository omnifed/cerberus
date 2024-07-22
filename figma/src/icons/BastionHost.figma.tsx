import figma from '@figma/code-connect'
import { BastionHost } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BastionHost,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-35',

  {
    imports: ["import { BastionHost } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BastionHost size={props.size} />,
  },
)
