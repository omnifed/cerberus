import figma from '@figma/code-connect'
import { RowCollapse } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RowCollapse,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1059',

  {
    imports: ["import { RowCollapse } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RowCollapse size={props.size} />,
  },
)
