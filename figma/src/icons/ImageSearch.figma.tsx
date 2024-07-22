import figma from '@figma/code-connect'
import { ImageSearch } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ImageSearch,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-18',

  {
    imports: ["import { ImageSearch } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ImageSearch size={props.size} />,
  },
)
