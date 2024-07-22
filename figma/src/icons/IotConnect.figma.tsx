import figma from '@figma/code-connect'
import { IotConnect } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IotConnect,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-11',

  {
    imports: ["import { IotConnect } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IotConnect size={props.size} />,
  },
)
