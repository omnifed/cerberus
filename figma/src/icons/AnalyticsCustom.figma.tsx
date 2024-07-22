import figma from '@figma/code-connect'
import { AnalyticsCustom } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AnalyticsCustom,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-557',

  {
    imports: ["import { AnalyticsCustom } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AnalyticsCustom size={props.size} />,
  },
)
