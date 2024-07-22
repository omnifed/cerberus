import figma from '@figma/code-connect'
import { WatsonHealthStudyRead } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthStudyRead,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-261',

  {
    imports: ["import { WatsonHealthStudyRead } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthStudyRead size={props.size} />,
  },
)
