import figma from '@figma/code-connect'
import { DropPhoto } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DropPhoto,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-228',

  {
    imports: ["import { DropPhoto } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DropPhoto size={props.size} />,
  },
)
