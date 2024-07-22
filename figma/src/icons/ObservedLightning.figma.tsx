import figma from '@figma/code-connect'
import { ObservedLightning } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ObservedLightning,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-789',

  {
    imports: ["import { ObservedLightning } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ObservedLightning size={props.size} />,
  },
)
