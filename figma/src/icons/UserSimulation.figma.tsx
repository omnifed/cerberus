import figma from '@figma/code-connect'
import { UserSimulation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  UserSimulation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-943',

  {
    imports: ["import { UserSimulation } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <UserSimulation size={props.size} />,
  },
)
