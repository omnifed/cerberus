import figma from '@figma/code-connect'
import { ImageCopy } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ImageCopy,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-264',

  {
    imports: ["import { ImageCopy } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ImageCopy size={props.size} />,
  },
)
