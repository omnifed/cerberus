import figma from '@figma/code-connect'
import { DistributeHorizontalCenter } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DistributeHorizontalCenter,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-198',

  {
    imports: ["import { DistributeHorizontalCenter } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DistributeHorizontalCenter size={props.size} />,
  },
)
