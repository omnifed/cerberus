import figma from '@figma/code-connect'
import { CicsWuiRegion } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CicsWuiRegion,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-65',

  {
    imports: ["import { CicsWuiRegion } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CicsWuiRegion size={props.size} />,
  },
)
