import figma from '@figma/code-connect'
import { IBMVsiOnVpcForRegulatedIndustries } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMVsiOnVpcForRegulatedIndustries,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-178',

  {
    imports: [
      "import { IBMVsiOnVpcForRegulatedIndustries } from '@cerberus/icons'",
    ],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMVsiOnVpcForRegulatedIndustries size={props.size} />,
  },
)
