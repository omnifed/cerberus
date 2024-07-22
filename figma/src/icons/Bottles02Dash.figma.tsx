import figma from '@figma/code-connect'
import { Bottles02Dash } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Bottles02Dash,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1170',

  {
    imports: ["import { Bottles02Dash } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Bottles02Dash size={props.size} />,
  },
)
