import figma from '@figma/code-connect'
import { PercentageFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PercentageFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-335',

  {
    imports: ["import { PercentageFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PercentageFilled size={props.size} />,
  },
)
