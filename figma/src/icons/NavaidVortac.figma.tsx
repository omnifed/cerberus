import figma from '@figma/code-connect'
import { NavaidVortac } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NavaidVortac,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1051',

  {
    imports: ["import { NavaidVortac } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NavaidVortac size={props.size} />,
  },
)
