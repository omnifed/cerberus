import figma from '@figma/code-connect'
import { SolarPanel } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SolarPanel,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-578',

  {
    imports: ["import { SolarPanel } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SolarPanel size={props.size} />,
  },
)
