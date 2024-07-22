import figma from '@figma/code-connect'
import { Accessibility } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Accessibility,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9426-1627',

  {
    imports: ["import { Accessibility } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Accessibility size={props.size} />,
  },
)
