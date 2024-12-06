import {
  Accordion,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionItemIndicator,
  DatePicker,
  DatePickerLabel,
  DatePickerInput,
  DatePickerCalendar,
  Field,
} from '@cerberus-design/react'
import { Box } from '@cerberus-design/styled-system/jsx'
import { css } from '@cerberus-design/styled-system/css'

export function StaticPreview() {
  return (
    <Box w="2/3">
      <Field>
        <DatePicker id="start_date" name="start_date">
          <DatePickerLabel>Start date</DatePickerLabel>
          <DatePickerInput />
          <DatePickerCalendar />
        </DatePicker>
      </Field>
    </Box>
  )
}

export function CustomPreview() {
  return (
    <Box w="2/3">
      <Accordion>
        <AccordionItem
          className={css({
            bgColor: 'black',
            borderColor: 'yellow',
          })}
          value="one"
        >
          <AccordionItemTrigger
            className={css({
              color: 'yellow',
            })}
          >
            Wu-Tang Clan
            <AccordionItemIndicator />
          </AccordionItemTrigger>
          <AccordionItemContent
            className={css({
              color: 'white',
              paddingInline: 'md',
              textStyle: 'body-md',
            })}
          >
            The rugged, raw, and unapologetic Wu-Tang Clan is a hip-hop group
            that has been around since 1992. The group is known for its
            distinctive sound and lyrics that often touch on themes of urban
            life, crime, and the struggles of the inner city New York.
          </AccordionItemContent>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
