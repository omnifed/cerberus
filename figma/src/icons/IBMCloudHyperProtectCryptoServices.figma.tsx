import figma from '@figma/code-connect'
import { IBMCloudHyperProtectCryptoServices } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudHyperProtectCryptoServices,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-48',

  {
    imports: [
      "import { IBMCloudHyperProtectCryptoServices } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => (
      <IBMCloudHyperProtectCryptoServices size={props.size} />
    ),
  },
)
