import figma from '@figma/code-connect'
import { ApplicationMobile } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ApplicationMobile,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-8',

  {
    imports: ["import { ApplicationMobile } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ApplicationMobile size={props.size} />,
  },
)
