import figma from '@figma/code-connect'
import { AccessibilityAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AccessibilityAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9426-1630',

  {
    imports: ["import { AccessibilityAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AccessibilityAlt size={props.size} />,
  },
)
