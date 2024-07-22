import figma from '@figma/code-connect'
import { CicsRegion } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CicsRegion,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-68',

  {
    imports: ["import { CicsRegion } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CicsRegion size={props.size} />,
  },
)
