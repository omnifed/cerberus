import figma from '@figma/code-connect'
import { TagNone } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TagNone,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-1094',

  {
    imports: ["import { TagNone } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TagNone size={props.size} />,
  },
)
