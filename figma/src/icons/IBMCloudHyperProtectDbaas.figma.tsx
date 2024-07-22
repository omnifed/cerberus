import figma from '@figma/code-connect'
import { IBMCloudHyperProtectDbaas } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudHyperProtectDbaas,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-51',

  {
    imports: ["import { IBMCloudHyperProtectDbaas } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudHyperProtectDbaas size={props.size} />,
  },
)
