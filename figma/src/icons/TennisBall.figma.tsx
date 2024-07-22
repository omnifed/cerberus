import figma from '@figma/code-connect'
import { TennisBall } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TennisBall,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1137',

  {
    imports: ["import { TennisBall } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TennisBall size={props.size} />,
  },
)
