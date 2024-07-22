import figma from '@figma/code-connect'
import { InstanceMx } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  InstanceMx,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-224',

  {
    imports: ["import { InstanceMx } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <InstanceMx size={props.size} />,
  },
)
