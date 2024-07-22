import figma from '@figma/code-connect'
import { UngroupObjects } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  UngroupObjects,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-144',

  {
    imports: ["import { UngroupObjects } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <UngroupObjects size={props.size} />,
  },
)
