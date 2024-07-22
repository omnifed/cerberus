import figma from '@figma/code-connect'
import { CertificateCheck } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CertificateCheck,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-56',

  {
    imports: ["import { CertificateCheck } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CertificateCheck size={props.size} />,
  },
)
