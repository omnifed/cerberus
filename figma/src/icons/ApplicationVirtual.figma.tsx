import figma from '@figma/code-connect'
import { ApplicationVirtual } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ApplicationVirtual,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-11',

  {
    imports: ["import { ApplicationVirtual } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ApplicationVirtual size={props.size} />,
  },
)
