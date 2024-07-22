import figma from '@figma/code-connect'
import { Blog } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Blog,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9622-302',

  {
    imports: ["import { Blog } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Blog size={props.size} />,
  },
)
