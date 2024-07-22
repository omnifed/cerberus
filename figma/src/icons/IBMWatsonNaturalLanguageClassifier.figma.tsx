import figma from '@figma/code-connect'
import { IBMWatsonNaturalLanguageClassifier } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMWatsonNaturalLanguageClassifier,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-97',

  {
    imports: [
      "import { IBMWatsonNaturalLanguageClassifier } from '@cerberus/icons'",
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
      <IBMWatsonNaturalLanguageClassifier size={props.size} />
    ),
  },
)
