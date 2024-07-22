import figma from '@figma/code-connect'
import { DocumentHorizontal } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DocumentHorizontal,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-216',

  {
    imports: ["import { DocumentHorizontal } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DocumentHorizontal size={props.size} />,
  },
)
