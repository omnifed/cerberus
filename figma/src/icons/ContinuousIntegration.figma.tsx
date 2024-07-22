import figma from '@figma/code-connect'
import { ContinuousIntegration } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ContinuousIntegration,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-17',

  {
    imports: ["import { ContinuousIntegration } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ContinuousIntegration size={props.size} />,
  },
)
