import { HStack } from '@/styled-system/jsx'
import { Field, For, Radio, RadioGroup, RadioProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'radioGroup')?.variants
  .size ?? []) as RadioProps['size'][]

export function SizeDemo() {
  return (
    <HStack gap="md" w="3/4">
      <For each={variants}>
        {(size) => (
          <Field label={`${size} size`} key={String(size)}>
            <RadioGroup defaultValue="cerberus" justifyContent="center">
              <Radio size={size} value="cerberus">
                Cerberus
              </Radio>
              <Radio size={size} value="hades">
                Hades
              </Radio>
              <Radio size={size} value="zeus">
                Zeus
              </Radio>
            </RadioGroup>
          </Field>
        )}
      </For>
    </HStack>
  )
}
