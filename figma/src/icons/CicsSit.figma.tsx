import figma from '@figma/code-connect'
import { CicsSit } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CicsSit,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-62',

  {
    imports: ["import { CicsSit } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CicsSit size={props.size} />,
  },
)
