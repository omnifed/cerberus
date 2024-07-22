import figma from '@figma/code-connect'
import { ChartRelationship } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartRelationship,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-716',

  {
    imports: ["import { ChartRelationship } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartRelationship size={props.size} />,
  },
)
