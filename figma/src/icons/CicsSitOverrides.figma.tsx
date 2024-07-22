import figma from '@figma/code-connect'
import { CicsSitOverrides } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CicsSitOverrides,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-65',

  {
    imports: ["import { CicsSitOverrides } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CicsSitOverrides size={props.size} />,
  },
)
