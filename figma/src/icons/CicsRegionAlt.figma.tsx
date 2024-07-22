import figma from '@figma/code-connect'
import { CicsRegionAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CicsRegionAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-71',

  {
    imports: ["import { CicsRegionAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CicsRegionAlt size={props.size} />,
  },
)
