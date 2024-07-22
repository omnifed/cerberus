import figma from '@figma/code-connect'
import { CicsRegionTarget } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CicsRegionTarget,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-74',

  {
    imports: ["import { CicsRegionTarget } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CicsRegionTarget size={props.size} />,
  },
)
