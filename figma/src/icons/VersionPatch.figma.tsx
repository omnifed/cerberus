import figma from '@figma/code-connect'
import { VersionPatch } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VersionPatch,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1393',

  {
    imports: ["import { VersionPatch } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VersionPatch size={props.size} />,
  },
)
