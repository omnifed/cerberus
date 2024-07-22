import figma from '@figma/code-connect'
import { CatalogPublish } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CatalogPublish,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-19',

  {
    imports: ["import { CatalogPublish } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CatalogPublish size={props.size} />,
  },
)
