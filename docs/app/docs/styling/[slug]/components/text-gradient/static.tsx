import { cerberus } from '@cerberus-design/react'

export default function TextGradientPreview() {
  return (
    <cerberus.div
      display="flex"
      flexDirection="column"
      gap="4"
      padding="6"
      borderRadius="lg"
      border="1px solid"
      borderColor="colorPalette.border.initial"
    >
      <cerberus.h3
        textGradient="cerberus.dark.charon-dark"
        fontSize="2xl"
        fontWeight="bold"
      >
        Charon Dark Gradient
      </cerberus.h3>

      <cerberus.div textGradient="cerberus.light.charon-light" fontSize="lg">
        This text uses the Charon light gradient variant.
      </cerberus.div>

      <cerberus.span
        textGradient="cerberus.dark.nyx-dark"
        fontSize="lg"
        fontWeight="semibold"
      >
        Nyx dark gradient creates a striking effect.
      </cerberus.span>

      <cerberus.span
        textGradient="cerberus.light.amphiaraus-light"
        fontSize="lg"
      >
        Amphiaraus light gradient for subtle elegance.
      </cerberus.span>
    </cerberus.div>
  )
}
