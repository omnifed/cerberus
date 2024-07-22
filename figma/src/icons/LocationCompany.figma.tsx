import figma from '@figma/code-connect'
import { LocationCompany } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LocationCompany,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1150',

  {
    imports: ["import { LocationCompany } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LocationCompany size={props.size} />,
  },
)
