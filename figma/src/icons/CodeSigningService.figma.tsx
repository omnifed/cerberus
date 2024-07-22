import figma from '@figma/code-connect'
import { CodeSigningService } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CodeSigningService,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-92',

  {
    imports: ["import { CodeSigningService } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CodeSigningService size={props.size} />,
  },
)
