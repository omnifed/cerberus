import figma from '@figma/code-connect'
import { LicenseThirdPartyDraft } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LicenseThirdPartyDraft,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1128',

  {
    imports: ["import { LicenseThirdPartyDraft } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LicenseThirdPartyDraft size={props.size} />,
  },
)
