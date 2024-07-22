import figma from '@figma/code-connect'
import { DistributeHorizontalRight } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DistributeHorizontalRight,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-204',

  {
    imports: ["import { DistributeHorizontalRight } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DistributeHorizontalRight size={props.size} />,
  },
)
