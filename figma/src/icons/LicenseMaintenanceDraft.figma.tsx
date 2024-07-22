import figma from '@figma/code-connect'
import { LicenseMaintenanceDraft } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LicenseMaintenanceDraft,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1122',

  {
    imports: ["import { LicenseMaintenanceDraft } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LicenseMaintenanceDraft size={props.size} />,
  },
)
