import { createCerberusConfig } from '@cerberus/panda-preset'

export default createCerberusConfig({
  // ...
  theme: {
    extend: {
      recipes: {
        button: {
          defaultVariants: {
            shape: 'default',
          },
        },
      },
    },
  },
})
