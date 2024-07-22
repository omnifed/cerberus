import figma from '@figma/code-connect'
import { Image } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Image,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-261',

  {
    imports: ["import { Image } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Image size={props.size} />,
  },
)
