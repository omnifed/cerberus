import figma from '@figma/code-connect'
import { RuleDataQuality } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RuleDataQuality,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1239',

  {
    imports: ["import { RuleDataQuality } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RuleDataQuality size={props.size} />,
  },
)
