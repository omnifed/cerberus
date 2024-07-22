import figma from '@figma/code-connect'
import { Satellite } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Satellite,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-98',

  {
    imports: ["import { Satellite } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Satellite size={props.size} />,
  },
)
