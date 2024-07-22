import figma from '@figma/code-connect'
import { TableOfContents } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TableOfContents,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1275',

  {
    imports: ["import { TableOfContents } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TableOfContents size={props.size} />,
  },
)
