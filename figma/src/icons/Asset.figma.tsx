import figma from '@figma/code-connect'
import { Asset } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Asset,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9622-260',

  {
    imports: ["import { Asset } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Asset size={props.size} />,
  },
)
