import figma from '@figma/code-connect'
import { AccessibilityColorFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AccessibilityColorFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9426-1636',

  {
    imports: ["import { AccessibilityColorFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AccessibilityColorFilled size={props.size} />,
  },
)
