import figma from '@figma/code-connect'
import { BookmarkAdd } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BookmarkAdd,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9601-2256',

  {
    imports: ["import { BookmarkAdd } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BookmarkAdd size={props.size} />,
  },
)
