import figma from '@figma/code-connect'
import { NoImage } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NoImage,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-305',

  {
    imports: ["import { NoImage } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NoImage size={props.size} />,
  },
)
