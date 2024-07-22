import figma from '@figma/code-connect'
import { HtmlReference } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  HtmlReference,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1048',

  {
    imports: ["import { HtmlReference } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <HtmlReference size={props.size} />,
  },
)
