import figma from '@figma/code-connect'
import { NavaidSeaplane } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NavaidSeaplane,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1066',

  {
    imports: ["import { NavaidSeaplane } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NavaidSeaplane size={props.size} />,
  },
)
