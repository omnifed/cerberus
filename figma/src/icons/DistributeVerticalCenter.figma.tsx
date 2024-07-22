import figma from '@figma/code-connect'
import { DistributeVerticalCenter } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DistributeVerticalCenter,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-210',

  {
    imports: ["import { DistributeVerticalCenter } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DistributeVerticalCenter size={props.size} />,
  },
)
