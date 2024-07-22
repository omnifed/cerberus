import figma from '@figma/code-connect'
import { ReportData } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ReportData,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1056',

  {
    imports: ["import { ReportData } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ReportData size={props.size} />,
  },
)
