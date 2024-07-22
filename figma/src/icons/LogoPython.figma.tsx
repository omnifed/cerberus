import figma from '@figma/code-connect'
import { LogoPython } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoPython,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9384-52',

  {
    imports: ["import { LogoPython } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoPython size={props.size} />,
  },
)
