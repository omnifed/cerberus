import figma from '@figma/code-connect'
import { PropertyRelationship } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PropertyRelationship,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-323',

  {
    imports: ["import { PropertyRelationship } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PropertyRelationship size={props.size} />,
  },
)
