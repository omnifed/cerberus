import figma from '@figma/code-connect'
import { IBMCloudInternetServices } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudInternetServices,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1281',

  {
    imports: ["import { IBMCloudInternetServices } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudInternetServices size={props.size} />,
  },
)
