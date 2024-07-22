import figma from '@figma/code-connect'
import { DropPhotoFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DropPhotoFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-231',

  {
    imports: ["import { DropPhotoFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DropPhotoFilled size={props.size} />,
  },
)
