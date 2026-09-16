import { ByteDemo } from './byte.demo'
import { CompactDemo } from './compact.demo'
import { CurrencyDemo } from './currency.demo'
import { DateDemo } from './date.demo'
import { LocaleDemo } from './locale.demo'
import { NumberDemo } from './number.demo'
import { PercentageDemo } from './percent.demo'
import { RelativeDemo } from './relative.demo'
import { SecondsDemo } from './seconds.demo'
import { ShortDemo } from './short.demo'
import { SizeDemo } from './size.demo'
import { TimeDemo } from './time.demo'
import { TimeLabelDemo } from './timeLabel.demo'
import { UnitDemo } from './unit.demo'
import { UnitDisplayDemo } from './unitDisplay.demo'

export const DEMOS = {
  byte: { preview: <ByteDemo /> },
  compact: { preview: <CompactDemo /> },
  currency: { preview: <CurrencyDemo /> },
  date: { preview: <DateDemo /> },
  number: { preview: <NumberDemo /> },
  percent: { preview: <PercentageDemo /> },
  relative: { preview: <RelativeDemo /> },
  seconds: { preview: <SecondsDemo /> },
  short: { preview: <ShortDemo /> },
  size: { preview: <SizeDemo /> },
  time: { preview: <TimeDemo /> },
  timeLabel: { preview: <TimeLabelDemo /> },
  locale: { preview: <LocaleDemo /> },
  unit: { preview: <UnitDemo /> },
  unitDisplay: { preview: <UnitDisplayDemo /> },
}
