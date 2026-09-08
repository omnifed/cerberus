import { BeeBat, ColorPalette, IbmMq, LogoReact, Rocket } from '@carbon/icons-react'
import type { LinkProps } from 'next/link'
import { type ElementType } from 'react'

type Link = {
  Icon: ElementType
  label: string
  group: string
  href: LinkProps<any>['href']
}

export const APP_BAR_LINKS: Link[] = [
  {
    label: 'Get Started',
    group: 'get-started',
    get href() {
      return `/docs/${this.group}/installation`
    },
    Icon: Rocket,
  },
  {
    label: 'Components',
    group: 'components',
    get href() {
      return `/docs/${this.group}/overview`
    },
    Icon: LogoReact,
  },
  {
    label: 'Data Grid',
    group: 'data-grid',
    get href() {
      return `/docs/${this.group}/overview`
    },
    Icon: LogoReact,
  },
  {
    label: 'Signals',
    group: 'signals',
    get href() {
      return `/docs/${this.group}/overview`
    },
    Icon: IbmMq,
  },
  {
    label: 'Styling',
    group: 'styling',
    get href() {
      return `/docs/${this.group}/cerberus-factory`
    },
    Icon: BeeBat,
  },
  {
    label: 'Theming',
    group: 'theming',
    get href() {
      return `/docs/${this.group}/overview`
    },
    Icon: ColorPalette,
  },
]
