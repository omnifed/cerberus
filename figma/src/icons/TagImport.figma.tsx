import figma from '@figma/code-connect'
import { TagImport } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TagImport,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-1095',

  {
    imports: ["import { TagImport } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TagImport size={props.size} />,
  },
)
