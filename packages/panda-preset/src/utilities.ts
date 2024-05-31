export interface CerberusUtilityConfig {
  description: string
  className: string
  values: string
  transform(value: string): Record<string, string>
}

type CustomUtilityConfig<K extends string> = Record<K, CerberusUtilityConfig>

const mxi: CustomUtilityConfig<'mxi'> = {
  mxi: {
    description:
      'x-axis margin shorthand - used to set inline margin at the start and end of an element',
    className: 'margin-inline-start-end',
    values: 'spacing',
    transform(value: string) {
      return {
        marginInlineStart: value,
        marginInlineEnd: value,
      }
    },
  },
}

const pxi: CustomUtilityConfig<'pxi'> = {
  pxi: {
    description:
      'x-axis padding shorthand - used to set inline padding at the start and end of an element',
    className: 'padding-inline-start-end',
    values: 'spacing',
    transform(value: string) {
      return {
        paddingInlineStart: value,
        paddingInlineEnd: value,
      }
    },
  },
}

export const utilities = {
  extend: {
    ...mxi,
    ...pxi,
  },
}
