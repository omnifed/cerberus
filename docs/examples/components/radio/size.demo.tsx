import { HStack } from '@/styled-system/jsx'
import { Field, For, Radio, RadioGroup, RadioProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'radio')?.variants.size ??
  []) as RadioProps['size'][]

export function SizeDemo() {
  return (
    <HStack gap="md" w="3/4">
      <For each={variants}>
        {(size) => (
          <Field label={`${size} size`} key={String(size)}>
            <RadioGroup defaultValue="cerberus" size={size} justifyContent="center">
              <Radio value="cerberus">Cerberus</Radio>
              <Radio value="hades">Hades</Radio>
              <Radio value="zeus">Zeus</Radio>
            </RadioGroup>
          </Field>
        )}
      </For>
    </HStack>
  )
}
