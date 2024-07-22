import figma from '@figma/code-connect'
import { VirtualDesktop } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VirtualDesktop,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-14',

  {
    imports: ["import { VirtualDesktop } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VirtualDesktop size={props.size} />,
  },
)
