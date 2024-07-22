import figma from '@figma/code-connect'
import { ReflectVertical } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ReflectVertical,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-344',

  {
    imports: ["import { ReflectVertical } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ReflectVertical size={props.size} />,
  },
)
