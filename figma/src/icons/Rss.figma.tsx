import figma from '@figma/code-connect'
import { Rss } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Rss,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-95',

  {
    imports: ["import { Rss } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Rss size={props.size} />,
  },
)
