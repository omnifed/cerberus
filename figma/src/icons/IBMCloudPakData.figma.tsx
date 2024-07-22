import figma from '@figma/code-connect'
import { IBMCloudPakData } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudPakData,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1305',

  {
    imports: ["import { IBMCloudPakData } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudPakData size={props.size} />,
  },
)
