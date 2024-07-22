import figma from '@figma/code-connect'
import { QrCode } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  QrCode,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-80',

  {
    imports: ["import { QrCode } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <QrCode size={props.size} />,
  },
)
