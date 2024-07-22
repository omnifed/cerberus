import figma from '@figma/code-connect'
import { IBMCloudCitrixDaas } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudCitrixDaas,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-18',

  {
    imports: ["import { IBMCloudCitrixDaas } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudCitrixDaas size={props.size} />,
  },
)
