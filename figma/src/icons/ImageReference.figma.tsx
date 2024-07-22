import figma from '@figma/code-connect'
import { ImageReference } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ImageReference,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-267',

  {
    imports: ["import { ImageReference } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ImageReference size={props.size} />,
  },
)
