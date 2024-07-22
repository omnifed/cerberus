import figma from '@figma/code-connect'
import { MobileAdd } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MobileAdd,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-47',

  {
    imports: ["import { MobileAdd } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MobileAdd size={props.size} />,
  },
)
