'use client'

import { FLEX_START } from '@/app/utils/const'
import { Field, Label, Checkbox } from '@cerberus-design/react'
import { hstack, vstack } from '@cerberus/styled-system/patterns'
import { useCallback, useState, type ChangeEvent } from 'react'

interface OverviewState {
  legal: boolean
  terms: boolean
}

export function OverviewPreview() {
  const [checked, setChecked] = useState<OverviewState>({
    legal: false,
    terms: false,
  })

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const key = event.currentTarget.name as keyof OverviewState
    setChecked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }, [])

  return (
    <div
      className={vstack({
        gap: '4',
      })}
    >
      <Field required>
        <Label
          className={hstack({
            justify: `${FLEX_START} !important`,
          })}
          htmlFor="terms"
          size="sm"
        >
          <Checkbox
            checked={checked.terms}
            id="terms"
            name="terms"
            onChange={handleChange}
            size="md"
          />
          I agree to the terms and conditions
        </Label>
      </Field>
      <Field>
        <Label
          className={hstack({
            justify: `${FLEX_START} !important`,
          })}
          htmlFor="legal"
          size="sm"
        >
          <Checkbox
            checked={checked.legal}
            id="legal"
            name="legal"
            onChange={handleChange}
            size="md"
          />
          I would like to receive marketing emails
        </Label>
      </Field>
      <Field>
        <Label
          className={hstack({
            justify: `${FLEX_START} !important`,
          })}
          htmlFor="legal"
          size="sm"
        >
          <Checkbox
            defaultChecked={true}
            id="mixed"
            name="mixed"
            mixed
            size="md"
          />
          Mixed state
        </Label>
      </Field>
    </div>
  )
}
