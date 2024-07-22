import figma from '@figma/code-connect'
import { DocumentSketch } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DocumentSketch,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-952',

  {
    imports: ["import { DocumentSketch } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DocumentSketch size={props.size} />,
  },
)
