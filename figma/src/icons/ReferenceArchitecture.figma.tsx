import figma from '@figma/code-connect'
import { ReferenceArchitecture } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ReferenceArchitecture,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1369',

  {
    imports: ["import { ReferenceArchitecture } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ReferenceArchitecture size={props.size} />,
  },
)
