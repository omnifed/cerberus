import figma from '@figma/code-connect'
import { IBMWatsonNaturalLanguageUnderstanding } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMWatsonNaturalLanguageUnderstanding,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-100',

  {
    imports: [
      "import { IBMWatsonNaturalLanguageUnderstanding } from '@cerberus/icons'",
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
      <IBMWatsonNaturalLanguageUnderstanding size={props.size} />
    ),
  },
)
