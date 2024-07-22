import figma from '@figma/code-connect'
import { BookmarkFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BookmarkFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9601-2257',

  {
    imports: ["import { BookmarkFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BookmarkFilled size={props.size} />,
  },
)
